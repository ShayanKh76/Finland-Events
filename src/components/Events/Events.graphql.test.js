import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GET_DATA } from '../../src/app/Events/events.graphql';
const mockEventData = {
    conferences: [
        {
            "id": "freezing-edge-2020",
            "series": {
                "id": "freezing-edge",
                "name": "Freezing Edge",
                "conferences": [
                    {
                        "name": "Freezing Edge 2020",
                        "id": "freezing-edge-2020",
                    }
                ],
            },
            "name": "Freezing Edge 2020",
            "organizer": {
                "name": "React Finland",
                "image": {
                    "url": "https://api.react-finland.fi/media/react-finland/logo/v2/logo-colored-with-text.svg",
                    "title": null,
                    "style": null,
                },
                "social": {
                    "twitter": "https://twitter.com/ReactFinland",
                    "github": "https://github.com/ReactFinland",
                    "facebook": null,
                    "linkedin": "https://linkedin.com/in/react-finland",
                    "youtube": "https://www.youtube.com/ReactFinland",
                },
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
                    },
                    "type": [
                        "ORGANIZER"
                    ],
                    "social": {
                        "linkedin": "https://linkedin.com/in/react-finland",
                        "youtube": "https://www.youtube.com/ReactFinland",
                        "instagram": null,
                        "facebook": null,
                    },
                    "keywords": null,
                    "location": {
                        "name": null,
                        "about": null,
                        "city": "Helsinki",
                        "address": null,
                    },
                    "talks": null,
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
                    },
                    "type": [
                        "SPONSOR"
                    ],
                    "social": {
                        "linkedin": null,
                        "youtube": null,
                        "instagram": null,
                        "facebook": null,
                    },
                    "keywords": null,
                    "location": {
                        "name": null,
                        "about": null,
                        "city": "Vienna",
                        "address": null,
                    },
                    "talks": null,
                }
            ],
            "slogan": "The edge isn't bleeding, it's freezing!",
            "websiteUrl": "https://freezing-edge.fi/",
            "locations": [
                {
                    "city": "Helsinki",
                    "address": "Eteläesplanadi 8",
                    "name": "Amanda",
                }
            ],
            "year": "2020",
            "startDate": "2020-06-01",
            "endDate": "2020-06-01",
        },
    ],
};
const mocks = [
    {
        request: {
            query: GET_DATA,
        },
        result: {
            data: mockEventData
        },
    },
];

describe('GraphQL Response', () => {
    it('Check if GraphQL response has wanted properties', async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <div>GraphQL Response Test</div>
            </MockedProvider>
        );
        const response = mocks[0].result.data;
        expect(response).toHaveProperty('conferences');
        expect(response.conferences).toHaveLength(1)
        expect(response.conferences[0]).toHaveProperty('name')
        expect(response.conferences[0]).toHaveProperty('slogan')
        expect(response.conferences[0]).toHaveProperty('locations')
        expect(response.conferences[0].organizer).toMatchObject({
            "name": "React Finland",
            "image": {
                "url": "https://api.react-finland.fi/media/react-finland/logo/v2/logo-colored-with-text.svg",
                "title": null,
                "style": null,
            },
            "social": {
                "twitter": "https://twitter.com/ReactFinland",
                "github": "https://github.com/ReactFinland",
                "facebook": null,
                "linkedin": "https://linkedin.com/in/react-finland",
                "youtube": "https://www.youtube.com/ReactFinland",
            },
        })

    });
});
