const day = 'monday';
switch (day) {
    case 'monday':
        console.log('Plan course')
        break;
    case 'tuesday':
        console.log('prepare theory videos')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples')
        break;
    case 'friday':
        console.log('Record videos')
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy weekend')
        break;
    default:
        console.log('not a valid day')
}
