import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Banner from './Banner'
import './Home.css'
import Card from './Card'
import { listListing } from '../action/listingAction'

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector(state => state.listingList)
  const { loading, error, listings } = listingList;

  useEffect(() => {
  dispatch(listListing());
  }, [dispatch]);

  return (
 <div className='home'>
    <Banner/>
    <div className='home_section'>
      <Card 
      src ="https://a0.muscache.com/im/pictures/4e40697e-59b5-4fc5-8486-72caafe297dd.jpg?im_w=720"
      title="Online Experiences"
      description="unique activities we can do together, led by a world of hosts"
      />
     
            <Card 
      src ="https://a0.muscache.com/im/pictures/d6986258-ba7d-40bd-be08-a78995311370.jpg?im_w=720"
      title="Online Experiences"
      description="sleep in luxury bedrooms"
      />
            <Card 
      src ="https://a0.muscache.com/im/pictures/miso/Hosting-39856435/original/ef424785-6d2c-41da-9e11-45fafb98088b.jpeg?im_w=720"
      title="Online Experiences"
      description="relax and cool off in a beautiful room"
      />
            <Card 
      src ="https://a0.muscache.com/im/pictures/miso/Hosting-39856435/original/e9898ac5-4326-411a-92cb-990b4adf4f5a.jpeg?im_w=720"
      title="Online Experiences"
      description="a place that feels like home"
      />
    </div>
    </div>
  )
}

export default Home