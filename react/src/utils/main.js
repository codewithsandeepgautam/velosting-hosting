import React, { useEffect } from 'react';
import { PostRequest } from './requests';
import { useDispatch } from 'react-redux';
import { setData } from '../store/counter/counterSlice';
const Main = () => {
  const dispatch = useDispatch();
  const openIndexedDB = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("ProductDB", 1);
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains("products")) {
          db.createObjectStore("products");
        }
      };
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
      request.onerror = (event) => {
        reject(`Error opening IndexedDB: ${event.target.error}`);
      };
    });
  };
  const storeProductsDataInIndexedDB = async (data) => {
    try {
      const db = await openIndexedDB();
      const transaction = db.transaction("products", "readwrite");
      const store = transaction.objectStore("products");
      store.put(data, "productsData");
      transaction.oncomplete = () => {
      };
      transaction.onerror = (event) => {
        console.error('Error storing data in IndexedDB:', event.target.error);
      };
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };
  const getProductsFromIndexedDB = async () => {
    try {
      const db = await openIndexedDB();
      const transaction = db.transaction("products", "readonly");
      const store = transaction.objectStore("products");
      const request = store.get("productsData");
      request.onsuccess = (event) => {
        const data = event.target.result;
        if (data) {
          dispatch(setData(data));
          console.log("data",data);
        } else {
          console.log('No data found in IndexedDB.');
        }
      };
      request.onerror = (event) => {
        console.error('Error reading data from IndexedDB:', event.target.error);
      };
    } catch (error) {
      console.error('Error fetching data from IndexedDB:', error);
    }
  };
  const getProductsData = async () => {
    try {
      const response = await PostRequest(`${process.env.REACT_APP_URL}/products`);
      await storeProductsDataInIndexedDB(response.data);
      console.log("response.data<<",response.data);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  };
  useEffect(() => {
    getProductsData();
    getProductsFromIndexedDB();
    // eslint-disable-next-line 
  }, [setData]);
  return (
    <div>
    </div>
  );
};

export default Main;

