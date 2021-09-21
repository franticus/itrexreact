import React, {useEffect} from "react";
import './index.css'
import FilterBar from "./components/FilterBar/FilterBar";
import Pagination from "./components/Pagination/Pagination";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import SearchBar from "./components/SearchBar/SearchBar";
import {getUsersData} from "./thunk/getUsersData";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchData() {
            await dispatch(getUsersData())
        }

        fetchData().then(r => r);
    }, [dispatch])
    const usersData = useSelector(state => state.users)
    usersData && console.log(usersData)

    return (
        <div className="App">
            <Header/>
            <div className="search-container">
                <SearchBar/>
                <FilterBar/>
            </div>
            <Table users={usersData}/>
            <Pagination/>
            <ProfileInfo/>
        </div>
    );
}

export default App;
