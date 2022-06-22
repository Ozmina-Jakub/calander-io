import React from "react";
import { useContext, useState, useEffect } from "react";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { useAuth } from './AuthContext';

const PointsContext = React.createContext();

export const usePoints = () => useContext(PointsContext);

export const PointsProvider = ({ children }) => {
    const [points, setPoints] = useState(0);

    const { currentUser } = useAuth();

    const updatePoints = (pts) => {
        let newPoints = points;
        points.points += pts;

        setPoints(() => {
            return newPoints
        })
        
        updateDoc(doc(getFirestore(), "userPoints", points.id), newPoints);
    }

    useEffect(() => {
        currentUser && getDocs(collection(getFirestore(), 'userPoints')).then(snap => snap.docs.forEach(ele => ele.data().email === currentUser.email && setPoints({ id: ele.id, ...ele.data() }))).catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    const value = { points, updatePoints }

    return ( 
        <PointsContext.Provider value={value}>
            {true && children}
        </PointsContext.Provider>
     );
}