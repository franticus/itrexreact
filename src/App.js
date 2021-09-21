import React, {useEffect, useState} from "react";
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

    const [allUsers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(10)

    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            await dispatch(getUsersData())
        }
        fetchData();
        setLoading(false)
    }, [dispatch])
    const usersData = useSelector(state => state.users)
    const usersLength = useSelector(state => state.pages)
    console.log(usersData)
    console.log(usersLength)

    const lastUserIndex = currentPage * usersPerPage
    const firstUserIndex = lastUserIndex - usersPerPage
    const currentUser = usersData.slice(firstUserIndex, lastUserIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)

    return (
        <div className="App">
            <Header/>
            <div className="search-container">
                <SearchBar/>
                <FilterBar/>
            </div>
            {loading
                ? <h2>Loading...</h2>
                : <Table users={currentUser}/>
            }
            {loading
                ? <h2>Loading...</h2>
                : <Pagination usersPerPage={usersPerPage}
                              paginate={paginate}
                              next={nextPage}
                              prev={prevPage}
                              totalUsers={usersLength}/>
            }
            <ProfileInfo/>
        </div>
    );
}

export default App;
