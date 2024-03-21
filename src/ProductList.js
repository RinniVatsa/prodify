import React from 'react'
import './ProductList.css' // Import CSS for styling
import { useState } from 'react'

// Sample product data
const products = [{
        id: 1,
        name: 'Wix',
        logo: require('./images/wix.png'),
        description: 'develop Personalized ',
        category: 'Automation',
        tags: ['#Digital Transformation'],
    },
    {
        id: 2,
        name: 'Shopify',
        logo: require('./images/shopify.png'),
        description: 'focus on more Product side',
        category: 'E-commerce',
        tags: ['#Online Shopping', '#cloud'],
    },
    {
        id: 3,
        name: 'MailChamp',
        logo: require('./images/mailchamp.png'),
        description: 'Tomorrow CRM meeting .A 3D chart on progress',
        category: 'Cloud Ops',
        tags: ['#MailChamp', '#ops'],
    },
    {
        id: 4,
        name: 'PayPal',
        logo: require('./images/paypal.png'),
        description: 'Tomorrow CRM meeting .A 3D chart on progress',
        category: 'SAAS',
        tags: ['#paypal', '#Tag'],
    },
    {
        id: 5,
        name: 'Disney',
        logo: require('./images/disney.jpeg'),
        description: 'Tomorrow CRM meeting .A 3D chart on progress',
        category: 'Publishing',
        tags: ['#Disney', '#tag2'],
    },
    {
        id: 6,
        name: 'InterCone',
        logo: require('./images/intercone.png'),
        description: 'Tomorrow CRM meeting .A 3D chart on progress',
        category: 'SAAS',
        tags: ['#intercone', '#tag2'],
    },
    {
        id: 7,
        name: 'Google',
        logo: require('./images/google.png'),
        description: 'Tomorrow CRM meeting .A 3D chart on progress',
        category: ['Automation', 'SAAS'],
        tags: ['#google', '#tag2'],
    },
    {
        id: 8,
        name: 'EverNote',
        logo: require('./images/evernote.png'),
        description: 'Tomorrow CRM meeting .A 3D chart on progress',
        category: 'SAAS',
        tags: ['#evernote', '#note'],
    },
    {
        id: 9,
        name: 'Microsoft',
        logo: require('./images/microsoft.png'),
        description: 'Tomorrow CRM meeting .A 3D chart on progress',
        category: 'Clients',
        tags: ['#microsoft', '#microsoft'],
    },
    {
        id: 10,
        name: 'Invision',
        logo: require('./images/invision.png'),
        description: 'Tomorrow CRM meeting .A 3D chart on progress',
        category: 'Clients',
        tags: ['#invision', '#tag2'],
    },
    // Add more products as needed
]

const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState('name')
    const [sortOrder, setSortOrder] = useState('asc')

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSortChange = (sortByValue) => {
        if (sortBy === sortByValue) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
        } else {
            setSortBy(sortByValue === 'category' ? 'category' : 'name')
            setSortOrder('asc')
        }
    }

    // Sort products based on selected property and order
    const sortedProducts = products.sort((a, b) => {
        const valueA = a[sortBy]
        const valueB = b[sortBy]

        if (sortBy === 'category') {
            return sortOrder === 'asc' ?
                (valueA || '').localeCompare(valueB || '') :
                (valueB || '').localeCompare(valueA || '')
        } else {
            return sortOrder === 'asc' ?
                (valueA || '').toLowerCase().localeCompare(valueB || '') :
                (valueB || '').toLowerCase().localeCompare(valueA || '')
        }
    })

    // Filter products based on search term
    const filteredProducts = sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    return ( <
        div className = "product-container" >
        <
        div className = "header" >
        <
        h1 > Product List < /h1>{' '} <
        div className = "filter-sort-container" >
        <
        input type = "text"
        placeholder = "Search products..."
        value = { searchTerm }
        onChange = { handleSearchChange }
        className = "search-input" /
        >
        <
        button onClick = {
            () => handleSortChange('name') }
        className = "sort-button" >
        Sort by Brands { sortBy === 'name' && sortOrder === 'asc' && '▲' } { ' ' } { sortBy === 'name' && sortOrder === 'desc' && '▼' } { ' ' } <
        /button>{' '} <
        button onClick = {
            () => handleSortChange('category') }
        className = "sort-button" >
        Sort by Category { ' ' } { sortBy === 'category' && sortOrder === 'asc' && '▲' } { ' ' } { sortBy === 'category' && sortOrder === 'desc' && '▼' } { ' ' } <
        /button>{' '} <
        /div>{' '} <
        /div>{' '} <
        table className = "product-table" >
        <
        thead >
        <
        tr >
        <
        th > Brands < /th> <th> Description </th > < th > Category < /th>{' '} <
        th > Tags < /th> <button> + </button > { ' ' } <
        /tr>{' '} <
        /thead>{' '} <
        tbody > { ' ' } {
            filteredProducts.map((product) => ( <
                tr key = { product.id } >
                <
                td >
                <
                input type = "checkbox"
                id = { `logo-${product.id}` }
                />{' '} <
                label htmlFor = { `logo-${product.id}` } >
                <
                img src = { product.logo }
                alt = { product.name }
                className = "product-logo" /
                >
                <
                /label>{' '} <
                span > { product.name } < /span>{' '} <
                /td>{' '} <
                td >
                <
                span > { product.description } < /span>{' '} <
                /td>{' '} <
                td > { ' ' } <
                span style = {
                    {
                        color: product.category === 'Automation' ? 'green' : 'red',
                    }
                } >
                { ' ' } { product.category } { ' ' } <
                /span>{' '} <
                /td>{' '} <
                td >
                <
                div className = "tags-container" > { ' ' } {
                    Array.isArray(product.tags) &&
                        product.tags.map((tag) => ( <
                            span key = { tag }
                            className = "tag" > { ' ' } { tag } { ' ' } <
                            /span>
                        ))
                } { ' ' } <
                /div>{' '} <
                /td>{' '} <
                /tr>
            ))
        } { ' ' } <
        /tbody>{' '} <
        /table>{' '} <
        /div>
    )
}

export default ProductList