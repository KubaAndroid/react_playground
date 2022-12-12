import { useEffect, useState } from 'react';
import { MenuItem } from '../model/MenuItem';

const Menu = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([])

    useEffect(() => {
        const getMenuItemsFromServer = async () => {
            const menuItems = await fetchMenuItems()
            setMenuItems(menuItems)
        }
        getMenuItemsFromServer()
    }, [])

    const fetchMenuItems = async () => {
        const res = await fetch('http://localhost:5000/menuItems')
        const data = await res.json()
        console.log(data)
        return data
    }

    const deleteMenuItems = async (id: number) => {
        await fetch(`http://localhost:5000/menuItems/${id}`, {
            method: 'DELETE'
        })
        setMenuItems(menuItems.filter((item: MenuItem) => item.id !== id))
    }

    const addMenuItem = async (item: MenuItem) => {
        const res = await fetch(`http://localhost:5000/menuItems`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(item)
        })

        const data = await res.json()
        setMenuItems([...menuItems, data])
    }
 
    return( 
        <>
            <div className='my-container'>
                <h1>Menu</h1>
                <h2>Menu content</h2>
            </div>
        </>
    )
}

export default Menu