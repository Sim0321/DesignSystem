import { initializeApp } from "firebase/app";
import { get, getDatabase, ref, set } from "firebase/database";

import { v4 as uid } from "uuid";

const firebaseConfig = {
  apikey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_APP_DATABASEURL,
};

// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
export const db = getDatabase(app);

/** 특정한 곳에 생성
 * param :
 *
 */
export async function addComponent(category, obj) {
  const id = uid();

  set(ref(db, `components/component/${category}/${id}`), {
    style: obj,
    id,
    type: category,
  })
    .then(() => {
      // console.log("버튼에 추가 성공");
    })
    .catch((error) => {
      // console.error("버튼에 추가 실패:", error);
    });
}

/** category 조회
 *
 */
export async function getCategory() {
  try {
    const snapshot = await get(ref(db, "/components"));

    if (snapshot.exists()) {
      const item = snapshot.val().component;
      return item;
    } else {
      // console.log("No Data");
      return [];
    }
  } catch (error) {
    console.error("데이터 실패", error);
    throw error; // 에러 핸들링
  }
}

/** 수정
 *
 */

/** 삭제
 *
 */
