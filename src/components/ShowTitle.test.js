import { render, screen } from '@testing-library/react';
import ShowTitle from './ShowTitle';
import axios from 'axios';
import { getPost } from '../apis/Posts';


const setUp = () => render(<ShowTitle />);

beforeEach(() => {
    setUp()
})


describe('test post app', () => {
    it('check post h1 available', () => {
        const linkElement = screen.getByText(/Title is/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('check post button available', () => {
        const linkElement = screen.getByText(/Get Title/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('check get post', () => {
        jest.mock('axios');
        axios.get = jest.fn();

        const postResponse = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }

        const resp = { data: postResponse };
        axios.get.mockResolvedValue(resp);
        return getPost().then(data => expect(data.title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit"))
    });
});

