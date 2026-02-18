import { useEffect, useState } from 'react'
import axios from 'axios'

const Components = (Display, url) => {
    let [pic, setPic] = useState([])
    let [flag, setFlag] = useState(true)
    console.log(pic);

    return function KBC() {

        useEffect(() => {
            flag ?
                axios.get(url)
                    .then((res) => {
                        setPic(res.data.results)
                        setFlag(false)
                    })
                    .catch((error) => {
                        console.log(error);
                    }) : null
        }, [])

        return <Display value={pic} />
    }
}

export default Components
