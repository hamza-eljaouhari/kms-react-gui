# Cryptographical Keys Lifecycle Management

This project is designed to handle the lifecycle of cryptographic keys for both AES and RSA encryption. It includes functionalities for creating, activating, deactivating, archiving, recovering, revoking, and destroying keys. The project supports AES with key sizes of 128, 192, and 256 bits, and RSA with key sizes of 1024, 2048, 3072, and 4096 bits.

## Features

- **Key Creation**: Generate new AES and RSA keys.
- **Key Activation**: Activate previously created keys.
- **Key Deactivation**: Deactivate active keys without destroying them.
- **Key Archiving**: Archive keys that are no longer in active use but need to be retained.
- **Key Recovery**: Recover archived keys for reactivation.
- **Key Revocation**: Revoke keys to ensure they can no longer be used.
- **Key Destruction**: Permanently destroy keys.

## Supported Key Sizes

- **AES**: 128, 192, 256 bits
- **RSA**: 1024, 2048, 3072, 4096 bits

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the project, run:
```bash
npm start
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Feel free to modify the content to better fit the specifics of your project and repository details.
```