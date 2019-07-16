import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('dark-mode')
    

    useEffect(() => {
        const body = document.getElementsByTagName('body')
        if (localStorage.getItem){
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    }, [localStorage.getItem('dark-mode')])

    return [someValue, setSomeValue]
}

export default useDarkMode;