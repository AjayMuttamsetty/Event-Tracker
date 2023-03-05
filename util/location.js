const GOOGLE_API_KEY = 'AIzaSyCjckmT1DrHLnxmcH-Y2xMHrDqOm_UboyY';

export const getStaticMapImage = (lat,long) => {
    const LocationURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}`;
    return LocationURL;
}