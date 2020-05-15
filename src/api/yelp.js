import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer WDoRQt78mMhX7GVY4uoOfIUjtrG0pcQji5Atq0TRwOMXXTBNg1Zx4rQVDdpbECvnMeIRxID-h_icqU0LlsirksCsocYbvJRJh5EHHtVEoTrvrEcCaQR7TAF2Hzq8XnYx'
    }
});