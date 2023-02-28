import "./_index.css";
import BackHeader from "../../layout/header/BackHeader";
import api from "../../api";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";


const Announce=()=>{
    const { loading, error ,data} = useFetch('http://localhost:1337/api/announces')

    if (loading) return <p>Loading...</p>
    if (error) return <p>error</p>


  return (
    <div className="container1">
      <div className="container">
        <BackHeader title="공지사항" />
        
      </div>
    </div>
  );
};

export default Announce;



  

