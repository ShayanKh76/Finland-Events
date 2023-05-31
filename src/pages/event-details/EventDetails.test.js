import { render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import { MockedProvider, } from '@apollo/client/testing';
import { GET_CONFERENCE } from './EventDetails';
import EventDetails from '.';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';

const mockEventData = {
    "conference":
    {
        "__typename": "Conference",
        "id": "freezing-edge-2020",
        "isInFavourite": false,
        "name": "Freezing Edge 2020",
        "series": {
            "__typename": "Series",
            "name": "Freezing Edge"
        },
        "organizer": {
            "__typename": "Contact",
            "firstName": "React",
            "lastName": "Finland",
            "name": "React Finland",
            "about": "Learn More about React, Explore Finland",
            "aboutShort": "Learn More about React, Explore Finland",
            "company": null,
            "tagline": null,
            "image": {
                "__typename": "Image",
                "url": "https://api.react-finland.fi/media/react-finland/logo/v2/logo-colored-with-text.svg",
                "title": null
            },
            "type": [
                "ORGANIZER"
            ],
            "social": {
                "__typename": "Social",
                "homepage": "https://www.react-finland.fi/",
                "mastodon": null,
                "twitter": "https://twitter.com/ReactFinland",
                "github": "https://github.com/ReactFinland",
                "facebook": null,
                "googleMaps": null,
                "medium": "https:// medium.com/ReactFinland",
                "instagram": null,
                "linkedin": "https://linkedin.com/in/react-finland",
                "youtube": "https://www.youtube.com/ReactFinland",
                "vk": null,
                "pinterest": null,
                "vimeo": null,
                "dribble": null,
                "devto": null,
                "twitch": null
            },
            "keywords": null,
            "talks": null,
            "noPhotography": null
        },
        "year": "2020",
        "startDate": "2020-06-01",
        "endDate": "2020-06-01",
        "slogan": "The edge isn't bleeding, it's freezing!",
        "websiteUrl": "https://freezing-edge.fi/",
        "locations": [
            {
                "__typename": "Location",
                "name": "Amanda",
                "about": "Paasitorni is the main venue of the event.",
                "city": "Helsinki",
                "address": "Eteläesplanadi 8",
                "image": {
                    "__typename": "Image",
                    "url": "https://api.react-finland.fi/media/locations/amanda.jpg",
                    "title": null
                },
                "social": {
                    "__typename": "Social",
                    "homepage": "https://www.amanda.fi/",
                    "mastodon": null,
                    "twitter": null,
                    "github": null,
                    "facebook": null,
                    "googleMaps": "https://g.page/cafe-amanda-helsinki",
                    "medium": null,
                    "instagram": null,
                    "linkedin": null,
                    "youtube": null,
                    "vk": null,
                    "pinterest": null,
                    "vimeo": null,
                    "dribble": null,
                    "devto": null,
                    "twitch": null
                },
                "country": {
                    "__typename": "Country",
                    "name": "Finland",
                    "code": "FI"
                }
            }
        ],
        "speakers": [
            {
                "__typename": "Contact",
                "firstName": "George",
                "lastName": "Mandis",
                "name": "George Mandis",
                "about": "Independent web developer and consultant, frequent traveler, occasional educator, perpetual optimist. Google Developer Expert in Web Technologies",
                "aboutShort": "Independent web developer and consultant, frequent traveler, occasional educator, perpetual optimist.",
                "company": null,
                "tagline": null,
                "image": {
                    "__typename": "Image",
                    "url": "https://api.react-finland.fi/media/people/george.jpg",
                    "title": null
                },
                "type": [
                    "SPEAKER"
                ],
                "social": {
                    "__typename": "Social",
                    "homepage": "https://george.mand.is",
                    "mastodon": null,
                    "twitter": "https://twitter.com/georgeMandis",
                    "github": "https://github.com/georgemandis",
                    "facebook": null,
                    "googleMaps": null,
                    "medium": null,
                    "instagram": null,
                    "linkedin": null,
                    "youtube": null,
                    "vk": null,
                    "pinterest": null,
                    "vimeo": null,
                    "dribble": null,
                    "devto": null,
                    "twitch": null
                },
                "keywords": [],
                "talks": [
                    {
                        "__typename": "Session",
                        "type": "TALK",
                        "title": "Mysterious talk",
                        "hasTitle": false,
                        "description": "",
                        "keywords": [],
                        "location": null,
                        "day": "2020-06-01",
                        "begin": "09:15",
                        "end": "10:45"
                    }
                ],
                "noPhotography": null
            },
            {
                "__typename": "Contact",
                "firstName": "Krista",
                "lastName": "Jäntti",
                "name": "Krista Jäntti",
                "about": "",
                "aboutShort": "",
                "company": null,
                "tagline": null,
                "image": {
                    "__typename": "Image",
                    "url": "https://api.react-finland.fi/media/people/krista.jpg",
                    "title": null
                },
                "type": [
                    "SPEAKER"
                ],
                "social": {
                    "__typename": "Social",
                    "homepage": null,
                    "mastodon": null,
                    "twitter": "https://twitter.com/kristatuulia",
                    "github": null,
                    "facebook": null,
                    "googleMaps": null,
                    "medium": null,
                    "instagram": null,
                    "linkedin": null,
                    "youtube": null,
                    "vk": null,
                    "pinterest": null,
                    "vimeo": null,
                    "dribble": null,
                    "devto": null,
                    "twitch": null
                },
                "keywords": [],
                "talks": [
                    {
                        "__typename": "Session",
                        "type": "TALK",
                        "title": "Mysterious talk",
                        "hasTitle": false,
                        "description": "",
                        "keywords": [],
                        "location": null,
                        "day": "2020-06-01",
                        "begin": "09:15",
                        "end": "10:45"
                    }
                ],
                "noPhotography": null
            },
            {
                "__typename": "Contact",
                "firstName": "Natalia",
                "lastName": "Tepluhina",
                "name": "Natalia Tepluhina",
                "about": "Vue.js core team member, Senior Frontend Engineer @GitLab, GDE, and coffee lover.",
                "aboutShort": "Vue.",
                "company": null,
                "tagline": null,
                "image": {
                    "__typename": "Image",
                    "url": "https://api.react-finland.fi/media/people/natalia.jpg",
                    "title": null
                },
                "type": [
                    "SPEAKER"
                ],
                "social": {
                    "__typename": "Social",
                    "homepage": null,
                    "mastodon": null,
                    "twitter": "https://twitter.com/N_Tepluhina",
                    "github": "https://github.com/NataliaTepluhina",
                    "facebook": null,
                    "googleMaps": null,
                    "medium": null,
                    "instagram": null,
                    "linkedin": null,
                    "youtube": null,
                    "vk": null,
                    "pinterest": null,
                    "vimeo": null,
                    "dribble": null,
                    "devto": null,
                    "twitch": null
                },
                "keywords": [],
                "talks": [
                    {
                        "__typename": "Session",
                        "type": "TALK",
                        "title": "Mysterious talk",
                        "hasTitle": false,
                        "description": "",
                        "keywords": [],
                        "location": null,
                        "day": "2020-06-01",
                        "begin": "13:15",
                        "end": "15:00"
                    }
                ],
                "noPhotography": null
            },
            {
                "__typename": "Contact",
                "firstName": "Patrick",
                "lastName": "Ecker",
                "name": "Patrick Ecker",
                "about": "Patrick is a frontend engineer at Rohea Oy, building the next big sales enablement platform built on Flow, ReScript, React and PHP. He is also core team member of the ReScript programming language, working on the language's tooling infrastructure and documentation website.",
                "aboutShort": "Patrick is a frontend engineer at Rohea Oy, building the next big sales enablement platform built on Flow, ReScript, React and PHP.",
                "company": null,
                "tagline": null,
                "image": {
                    "__typename": "Image",
                    "url": "https://api.react-finland.fi/media/people/patrick.jpg",
                    "title": null
                },
                "type": [
                    "SPEAKER"
                ],
                "social": {
                    "__typename": "Social",
                    "homepage": null,
                    "mastodon": null,
                    "twitter": "https://twitter.com/ryyppy",
                    "github": "https://github.com/ryyppy",
                    "facebook": null,
                    "googleMaps": null,
                    "medium": null,
                    "instagram": null,
                    "linkedin": "https://linkedin.com/in/patrick-stapfer-5ba205a4",
                    "youtube": null,
                    "vk": null,
                    "pinterest": null,
                    "vimeo": null,
                    "dribble": null,
                    "devto": null,
                    "twitch": null
                },
                "keywords": [
                    "React.js",
                    "ReScript"
                ],
                "talks": [
                    {
                        "__typename": "Session",
                        "type": "TALK",
                        "title": "Mysterious talk",
                        "hasTitle": false,
                        "description": "",
                        "keywords": [],
                        "location": null,
                        "day": "2020-06-01",
                        "begin": "13:15",
                        "end": "15:00"
                    }
                ],
                "noPhotography": null
            },
            {
                "__typename": "Contact",
                "firstName": "Ken",
                "lastName": "Wheeler",
                "name": "Ken Wheeler",
                "about": "Technology Artist - Synthwave & Hip Hop Producer - Dad - Grilling Enthusiast.\n\nNote that due to external circumstances, Ken won't be present at the conference and will participate remotely!",
                "aboutShort": "Technology Artist - Synthwave & Hip Hop Producer - Dad - Grilling Enthusiast.",
                "company": null,
                "tagline": "Made slick carousel, now makes beats",
                "image": {
                    "__typename": "Image",
                    "url": "https://api.react-finland.fi/media/people/kenw.jpg",
                    "title": null
                },
                "type": [
                    "SPEAKER"
                ],
                "social": {
                    "__typename": "Social",
                    "homepage": null,
                    "mastodon": null,
                    "twitter": "https://twitter.com/ken_wheeler",
                    "github": "https://github.com/kenwheeler",
                    "facebook": null,
                    "googleMaps": null,
                    "medium": null,
                    "instagram": null,
                    "linkedin": "https://linkedin.com/in/kennywheeler",
                    "youtube": null,
                    "vk": null,
                    "pinterest": null,
                    "vimeo": null,
                    "dribble": null,
                    "devto": null,
                    "twitch": null
                },
                "keywords": [
                    "React.js"
                ],
                "talks": [
                    {
                        "__typename": "Session",
                        "type": "TALK",
                        "title": "Mysterious talk",
                        "hasTitle": false,
                        "description": "",
                        "keywords": [],
                        "location": null,
                        "day": "2020-06-01",
                        "begin": "13:15",
                        "end": "15:00"
                    }
                ],
                "noPhotography": null
            },
            {
                "__typename": "Contact",
                "firstName": "Tero",
                "lastName": "Parviainen",
                "name": "Tero Parviainen",
                "about": "Software developer, music hacker. One half of Counterpoint.",
                "aboutShort": "Software developer, music hacker.",
                "company": null,
                "tagline": "Generates music",
                "image": {
                    "__typename": "Image",
                    "url": "https://api.react-finland.fi/media/people/tero.jpg",
                    "title": null
                },
                "type": [
                    "SPEAKER"
                ],
                "social": {
                    "__typename": "Social",
                    "homepage": "https://ctpt.co",
                    "mastodon": null,
                    "twitter": "https://twitter.com/teropa",
                    "github": "https://github.com/teropa",
                    "facebook": null,
                    "googleMaps": null,
                    "medium": null,
                    "instagram": null,
                    "linkedin": null,
                    "youtube": null,
                    "vk": null,
                    "pinterest": null,
                    "vimeo": null,
                    "dribble": null,
                    "devto": null,
                    "twitch": null
                },
                "keywords": [
                    "React.js"
                ],
                "talks": [
                    {
                        "__typename": "Session",
                        "type": "TALK",
                        "title": "Mysterious talk",
                        "hasTitle": false,
                        "description": "",
                        "keywords": [],
                        "location": null,
                        "day": "2020-06-01",
                        "begin": "15:30",
                        "end": "16:30"
                    }
                ],
                "noPhotography": null
            },
            {
                "__typename": "Contact",
                "firstName": "Bodil",
                "lastName": "Stokke",
                "name": "Bodil Stokke",
                "about": "",
                "aboutShort": "",
                "company": null,
                "tagline": null,
                "image": {
                    "__typename": "Image",
                    "url": "https://api.react-finland.fi/media/people/bodil.jpg",
                    "title": null
                },
                "type": [
                    "SPEAKER"
                ],
                "social": {
                    "__typename": "Social",
                    "homepage": "http://bodil.lol",
                    "mastodon": null,
                    "twitter": "https://twitter.com/bodil",
                    "github": "https://github.com/bodil",
                    "facebook": null,
                    "googleMaps": null,
                    "medium": null,
                    "instagram": null,
                    "linkedin": null,
                    "youtube": null,
                    "vk": null,
                    "pinterest": null,
                    "vimeo": null,
                    "dribble": null,
                    "devto": null,
                    "twitch": null
                },
                "keywords": [],
                "talks": [
                    {
                        "__typename": "Session",
                        "type": "TALK",
                        "title": "Mysterious talk",
                        "hasTitle": false,
                        "description": "",
                        "keywords": [],
                        "location": null,
                        "day": "2020-06-01",
                        "begin": "15:30",
                        "end": "16:30"
                    }
                ],
                "noPhotography": null
            }
        ],
        "keynotes": []
    }
};

const mocks = {
    request: {
        query: GET_CONFERENCE,
        variables: { "conferenceId": "freezing-edge-2020" },
        eventId: "freezing-edge-2020"
    },
    result: {
        data: mockEventData,
    },
};

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('EventDetails', () => {
    it('Check for details in the component', async () => {
        useRouter.mockImplementation(() => ({
            query: { eventId: 'freezing-edge-2020' },
        }));

        render(
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <EventDetails />
            </MockedProvider>
        );


        await waitFor(() => {
            expect(screen.getByText('The edge isn\'t bleeding, it\'s freezing!')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('Freezing Edge 2020')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('Paasitorni is the main venue of the event.')).toBeInTheDocument();
        });
    });
});
