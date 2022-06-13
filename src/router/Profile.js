import { useAuth } from '../context/AuthContext';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';

const Profile = () => {
    const { currentUser } = useAuth();
    const email = currentUser.email.split("@");

    const [points, setPoints] = useState(0);
    const [title, setTitle] = useState("Novice");

    useEffect(() => {
        getDocs(collection(getFirestore(), 'userPoints')).then(snap => snap.docs.forEach(ele => ele.data().email === currentUser.email && setPoints({ id: ele.id, ...ele.data() }))).then(setMyTitle()).catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setMyTitle = () => {
        let newRank;
        if(points.points > 300) {
            newRank = "pro"
        } else if (points.points > 900) {
            newRank = "Expert"
        } else {
            newRank = "Novice"
        }
        //console.log(points)
        setTitle(newRank);
    }

    return ( 
        <main className="content adder">
            <div className="inner">
                <h1>Profile</h1>
                <div className="cnt">
                    Name: {email[0]}<br/>
                    E-Mail: {currentUser.email}<br/>
                    Points: {points.points}<br/>
                    Rank: {title}
                </div>
            </div>
            <div className="decor"></div>
        </main>
     );
}
 
export default Profile;