import { useEffect, useState } from "react";

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=> {
        fetch('categories.json')
        .then(result => result.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-xl font-bold mb-5">All Category</h2>
            <div className="flex flex-col gap-3">
                {
                    categories.map(category => <button className="btn justify-start p-5 rounded-sm" key={category.id}>{category.name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNav;