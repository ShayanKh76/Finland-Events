import { render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import { MockedProvider, } from '@apollo/client/testing';
import { GET_CONFERENCE } from './EventDetails';
import EventDetails from '.';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';

const mockEventData = {
    "conference": {
        "id": "freezing-edge-2020",
        "series": {
            "id": "freezing-edge",
            "name": "Freezing Edge",
            "conferences": [
                {
                    "name": "Freezing Edge 2020",
                    "id": "freezing-edge-2020",
                    "__typename": "Conference"
                }
            ],
            "__typename": "Series"
        },
        "name": "Freezing Edge 2020",
        "organizer": {
            "name": "React Finland",
            "image": {
                "url": "https://api.react-finland.fi/media/react-finland/logo/v2/logo-colored-with-text.svg",
                "title": null,
                "style": null,
                "__typename": "Image"
            },
            "social": {
                "twitter": "https://twitter.com/ReactFinland",
                "github": "https://github.com/ReactFinland",
                "facebook": null,
                "linkedin": "https://linkedin.com/in/react-finland",
                "youtube": "https://www.youtube.com/ReactFinland",
                "__typename": "Social"
            },
            "__typename": "Contact"
        },
        "partners": [
            {
                "firstName": "React",
                "lastName": "Finland",
                "name": "React Finland",
                "about": "Learn More about React, Explore Finland",
                "aboutShort": "Learn More about React, Explore Finland",
                "company": null,
                "tagline": null,
                "image": {
                    "url": "https://api.react-finland.fi/media/react-finland/logo/v2/logo-colored-with-text.svg",
                    "title": null,
                    "__typename": "Image"
                },
                "type": [
                    "ORGANIZER"
                ],
                "social": {
                    "linkedin": "https://linkedin.com/in/react-finland",
                    "youtube": "https://www.youtube.com/ReactFinland",
                    "instagram": null,
                    "facebook": null,
                    "__typename": "Social"
                },
                "keywords": null,
                "location": {
                    "name": null,
                    "about": null,
                    "city": "Helsinki",
                    "address": null,
                    "__typename": "Location"
                },
                "talks": null,
                "__typename": "Contact"
            },
            {
                "firstName": "SurviveJS",
                "lastName": "",
                "name": "SurviveJS",
                "about": "SurviveJS will take you from a JavaScript apprentice to master",
                "aboutShort": "SurviveJS will take you from a JavaScript apprentice to master.",
                "company": null,
                "tagline": null,
                "image": {
                    "url": "https://api.react-finland.fi/media/sponsors/survivejs.svg",
                    "title": null,
                    "__typename": "Image"
                },
                "type": [
                    "SPONSOR"
                ],
                "social": {
                    "linkedin": null,
                    "youtube": null,
                    "instagram": null,
                    "facebook": null,
                    "__typename": "Social"
                },
                "keywords": null,
                "location": {
                    "name": null,
                    "about": null,
                    "city": "Vienna",
                    "address": null,
                    "__typename": "Location"
                },
                "talks": null,
                "__typename": "Contact"
            }
        ],
        "slogan": "The edge isn't bleeding, it's freezing!",
        "websiteUrl": "https://freezing-edge.fi/",
        "locations": [
            {
                "city": "Helsinki",
                "address": "Eteläesplanadi 8",
                "name": "Amanda",
                "__typename": "Location"
            }
        ],
        "year": "2020",
        "startDate": "2020-06-01",
        "endDate": "2020-06-01",
        "__typename": "Conference"
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
            expect(screen.getByText('React Finland')).toBeInTheDocument();
        });
    });
});
