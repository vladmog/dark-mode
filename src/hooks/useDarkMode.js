import { useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('key')

    useEffect(() => {
        if (someValue){
            // document.getElementsByTagName('body')[0].classList.add("dark-mode");
            document.body.classList.add("dark-mode")
        } else {
            // document.getElementsByTagName('body')[0].classList.remove("dark-mode");
            document.body.classList.remove("dark-mode")
        }
    }, [someValue])

    return [someValue, setSomeValue]
}

export default useDarkMode;