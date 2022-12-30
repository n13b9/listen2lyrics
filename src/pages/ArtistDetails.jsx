import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {DetailsHeader, Error, Loader} from '../components';

import { useGetSongDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
    const {songid} = useParams();
    const {data:sData, isFetching:isFetchingSongDetails} = useGetSongDetailsQuery({songid});
    
    console.log(sData)


    if(isFetchingSongDetails) return <Loader title='searching Artist details'/>
    return (
    <div className='flex flex-col'>
        {<DetailsHeader artistId='' sData={sData} /> }
            
      </div>
    );
}

export default ArtistDetails;
