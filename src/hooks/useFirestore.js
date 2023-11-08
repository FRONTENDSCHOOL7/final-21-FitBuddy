import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { useReducer } from 'react';
import { appFireStore, timestamp } from '../firebase/config';

const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'addDoc':
      return { isPending: false, document: action.payload, success: true, error: null };
    case 'error':
      return { isPending: false, document: null, success: false, error: action.payload };
    case 'isPending':
      return { isPending: true, document: null, success: false, error: null };
    case 'deleteDoc':
      return { isPending: false, document: null, success: true, error: null };
    default:
      return state;
  }
};

export const useFirestore = (transaction) => {
  // response 에는 우리의 요청에 대한 firestore로 부터의 응답을 저장합니다.
  // 주로 데이터의 저장 성공 또는 요청한 문서 데이터일 것이며, 때문에 객체데이터를 다루는데 유용한 useReducer를 사용합니다.
  const [response, dispatch] = useReducer(storeReducer, initState);

  // colRef : 우리가 만들 컬랙션의 참조입니다.
  const colRef = collection(appFireStore, transaction);

  // 컬렉션에 문서를 추가합니다.
  const addDocument = async (doc) => {
    dispatch({ type: 'isPending' });
    try {
      // docRef : 우리가 만들 문서의 참조입니다.
      // addDoc : 컬렉션에 문서를 추가합니다.
      // 코드참고 : https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document

      const createdTime = timestamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      dispatch({ type: 'addDoc', payload: docRef });
    } catch (e) {
      dispatch({ type: 'error', payload: e.message });
    }
  };

  // 컬렉션에서 문서를 제거합니다.
  const deleteDocument = async (id) => {
    dispatch({ type: 'isPending' });
    try {
      const docRef = await deleteDoc(doc(colRef, id));
      dispatch({ type: 'deleteDoc', payload: docRef });
    } catch (e) {
      dispatch({ type: 'error', payload: e.message });
    }
  };

  return { addDocument, deleteDocument, response };
};
