function distanceFromHqInBlocks(street) {

    const hqStreet = 42;

    if (street >= hqStreet) {
        return street - hqStreet;
    } else {
        return hqStreet - street;
    }

}


function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(street1, street2) {
    const oneBlock = 264;

    let northDistance = (street2 - street1) * oneBlock;
    let southDistance = (street1 - street2) * oneBlock;

    if (street1 <= street2) {
        return northDistance;
    } else {
        return southDistance;
    }

}


function calculatesFarePrice(start, destination) {

    let distanceInFeet = distanceTravelledInFeet(start, destination);
    let firstFreeFourHundredFeet = distanceInFeet - 400; 

    if (distanceInFeet <= 400) {
        let cost = 0;
        return cost;
    } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        let cost = (distanceInFeet - 400) * 0.02;
        return cost;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        let cost = 25;
        return cost;
    } else if (distanceInFeet > 2500) {
        return 'cannot travel that far';
    }




}