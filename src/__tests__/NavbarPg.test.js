import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarPg from '../components/NavbarPg';

it('renders correctly', () => {
  const navigation = renderer
    .create(<Router><NavbarPg /></Router>)
    .toJSON();
  expect(navigation).toMatchSnapshot();
});
