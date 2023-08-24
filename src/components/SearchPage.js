import React from 'react'
import {Button} from '@mui/material'
import './SearchPage.css'
import SearchResults from './SearchResults'

const SearchPage = () => {
  return (
    <div className='searchPage'>
        <div className='searchPage_info'>
            <p>62 stays . 25 August to 31 August . 2 guests</p>
            <h1>Stays nearby</h1>
            <Button variant='outlined'>Cancellation Flexibilty</Button>
            <Button variant='outlined'>Type of place</Button>
            <Button variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and beds</Button>
            <Button variant='outlined'>More filters</Button>
        </div>
        <SearchResults img="https://a0.muscache.com/im/pictures/bb79df4d-9768-4f93-b6d5-764321d4b2fe.jpg?im_w=720"
        location="Private room in center of Cape Town"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Free parking"
        star={4.90}
        price="ZAR900 / night"
        total="ZAR3000 / total"
        />
         <SearchResults img="https://a0.muscache.com/im/pictures/miso/Hosting-826423930008511853/original/66abf42f-1c85-45ec-b0e0-3543f6f34749.jpeg?im_w=720"
        location="Private room in center of Johannesburg"
        title="Stay at this spacious Gracious House"
        description="1 guest . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Free parking"
        star={4.23}
        price="ZAR890 / night"
        total="ZAR2600 / total"
        />
         <SearchResults img="https://a0.muscache.com/im/pictures/miso/Hosting-826423930008511853/original/456c0ca3-c61b-4acb-af0a-314f2a927ace.jpeg?im_w=720"
        location="Private room in center of Durban"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Free parking"
        star={3.90}
        price="ZAR500 / night"
        total="ZAR1500 / total"
        />
         <SearchResults img="https://a0.muscache.com/im/pictures/bbe1f2a5-d8ae-42aa-a099-98f5b977186b.jpg?im_w=720"
        location="Private room in center of Cape Town"
        title="Stay at this spacious Ballito House"
        description="1 guest . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Free parking"
        star={5.00}
        price="ZAR1200 / night"
        total="ZAR5000 / total"
        />
         <SearchResults img="https://a0.muscache.com/im/pictures/01fadc03-5eee-42d4-8a8b-d5e374b6767a.jpg?im_w=720"
        location="Private room in center of Johannesburg"
        title="Stay at this spacious Zimbali House"
        description="1 guest . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Free parking"
        star={5.00}
        price="ZAR1500 / night"
        total="ZAR6000 / total"
        />
    </div>
  )
}

export default SearchPage