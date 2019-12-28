import React, { Component } from 'react';
import config from './config';

const getToken = async () => {
  try {
    const response = await fetch(
      `${config.commercelayerBaseEndpoint}/oauth/token`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'client_credentials',
          client_id: config.commercelayerClientId,
          scope: config.commercelayerScope,
        }),
      }
    );

    const token = await response.json();

    return token;
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (access_token) => {
  try {
    const response = await fetch(
      `${config.commercelayerBaseEndpoint}/api/skus`,
      {
        headers: {
          Accept: 'application/vnd.api+json',
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const products = await response.json();

    return products;
  } catch (error) {
    console.log(error);
  }
};

class App extends Component {
  state = {
    isLoading: true,
    products: [],
  };

  async componentDidMount() {
    const { access_token } = await getToken();
    const products = await getProducts(access_token);
    this.setState({ isLoading: false, products });
  }

  render() {
    const {
      isLoading,
      products: { data },
    } = this.state;

    return (
      <>
        <h1>React Nights 2019</h1>

        {isLoading && '. . .'}
        {!isLoading && (
          <ul>
            {data.map((product) => (
              <li key={product.id}>
                <h2>{product.attributes.name}</h2>
                <img
                  src={product.attributes.image_url}
                  alt={product.attributes.description}
                />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default App;
