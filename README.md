# Ireland's Sights

There are 2 goals for this website. (1) For external users coming to the site to be able to plan their next stay in Ireland. (2) To get the users coming to the website to book a travel/tour guide package of Dublin City. 

## UX

![Mockup](assets/img/mockup.JPG)

This website is mainly for people who are in Ireland who want to travel but cannot travel aboad due to Covid-19. The website is targeted to familys and indiviuals looking to plan a staycation in Ireland. 

- As an individual I want to be able to find an area in Ireland to travel to that I havent been to before. I want a range of choice and I want to see the experiences that others had before me.

- As a family we want to find an area to travel to within Ireland with a range of choice. We want to see a preview of the experiences others have had before us and the images of the locations to see if it would be possible to take small children. We would also need family rates and the option of contacting the sites owners in order to ask additional questions that might arise.

- [Homepage](assets/img/homepage.JPG)
- [Places](assets/img/places.JPG)
- [Gallary](assets/img/gall.JPG)
- [Contact](assets/img/contact.JPG)

## Features

- A navbar for desktop that collapses into a hamburger icon for the mobile version.
- On the Homepage 3 previous users experiences with some javascript to open their testimonies when clicked on, which collapses back down when clicked again.
- On the Places page there are 2 maps using LeafletJS API's. The first shows locations throughout Ireland, the second shows Dubin City. Both maps can be interacted with.
- On the Gallary there are 9 images which can be rotated through when click on by the user. The Gallary was made with the Lightbox API.
- On the Contact page there is a submission form which allows the user to email any questions they may have. The Contact page was made with the EmailJS API.

#### Features Left to Implement

- An option for the user to book the dates they want would be useful for future developement and could probably be achieved through an API.

## Technologies Used

The website uses the following technologies and libraries:

- HTML5 for the website strcuture.
- CSS3 for the websites appearence.
- Javascript for DOM manipulation.

- Bootstrap 4
- JQuery 
- Lightbox
- EmailJS
- LeafletJS


### Testing

- Content kept cutting through the footer, solved it by removing a bottom of zero from the footer

## Credts:
- Logo [pixabay](https://cdn.pixabay.com/photo/2020/07/17/12/25/compass-5413948_1280.png)
- Background [HD wallpaper](https://www.wallpaperflare.com/pink-and-blue-abstract-painting-digital-art-artwork-backgrounds-wallpaper-hjbwb)

- [Quote#1] (https://www.freepik.com/premium-photo/smilong-man-holiday-portrait-guy_5905917.htm)
- [Quote#2] (https://pxhere.com/en/photo/540857)
- [Quote#3] (https://pxhere.com/en/photo/540853)

#### Map Images:

    - [Kilkenny Castle](https://pixabay.com/photos/kilkenny-castle-castle-kilkenny-3136336/)
    - [Glendalough](https://www.flickr.com/photos/53400673@N08/15378477522)
    - [Killarney](https://commons.wikimedia.org/wiki/File:Old_Weir_Bridge,_Killarney_National_Park.jpg)
    - [Wexford] (https://www.flickr.com/photos/michalo/2629154762)
    - [Waterford city](https://pixabay.com/photos/search/waterford/)

#### Map Icons From: [MapIcons] (https://mapicons.mapsmarker.com/)

#### Gallary Images:

- [Phoneix Park](https://pixabay.com/photos/ireland-dublin-phoenix-park-urban-2228961/)

- Places page [Map](https://leafletjs.com/examples/quick-start/)

- Gallary with [lightbox] (https://lokeshdhakar.com/projects/lightbox2/)

- Navbar from [Bootstrap](https://getbootstrap.com/docs/5.0/components/navbar/#toggler)

#### Email function

 - This was taken from the Code Institutes lesson under: Putting it all together > Sending Emails Using EmailJS > Sending Emails!

### Acknowledgements:
- Got help setting the footer to the bottom of the page on (https://stackoverflow.com/questions/3443606/make-footer-stick-to-bottom-of-page-correctly)
- Got help setting the text-area with (https://www.tutorialspoint.com/How-to-Create-a-Multi-line-Text-Input-Text-Area-In-HTML#:~:text=To%20create%20a%20multi%2Dline%20text%20input%2C%20use%20the%20HTML,input%20text%20over%20multiple%20rows.&text=Specifies%20that%20on%20page%20load%20the%20text%20area%20should%20automatically%20get%20focus.)