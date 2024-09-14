import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Data/Firebase";

const UseFetchArtistProfDoc = (collectionName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCollection = () => {
    setIsLoading(true);
    try {
      const docRef = collection(db, collectionName);
      const q = query(docRef, orderBy("createdAt", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const allData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(allData);
        setIsLoading(false);
      });

      // Clean up the subscription on unmount
      return unsubscribe;
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching collection:", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = getCollection();
    
    // Unsubscribe from snapshot listener when the component unmounts
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [collectionName]); // Re-run when the collectionName changes

  return { data, isLoading };
};

export default UseFetchArtistProfDoc;
