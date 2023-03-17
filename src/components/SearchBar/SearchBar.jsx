import { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Button, Input } from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      return;
    }
    onSubmit(query);
    console.log(query);
    setQuery('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <BsSearch size="20" />
        </Button>
        <Input
          value={query}
          onChange={handleChange}
          type="text"
          autocomplete="off"
          autofucus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class SearchBar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = e => {
//     this.setState({ query: e.currentTarget.value.toLowerCase() });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     const query = this.state.query.trim();
//     if (!query) {
//       return;
//     }
//     this.props.onSubmit(query);
//     console.log(query);
//     this.setState({ query: '' });
//   };

//   render() {
//     return (
//       <Header>
//         <Form onSubmit={this.handleSubmit}>
//           <Button type="submit">
//             <BsSearch size="20" />
//           </Button>
//           <Input
//             value={this.state.query}
//             onChange={this.handleChange}
//             type="text"
//             autocomplete="off"
//             autofucus
//             placeholder="Search images and photos"
//           />
//         </Form>
//       </Header>
//     );
//   }
// }

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
