import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const CopyToClipboard = ({ textToCopy }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopySuccess('Copied!');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        setCopySuccess('Failed to copy!');
      });
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center"
        onClick={copyToClipboard}
      >
        <FontAwesomeIcon icon={faCopy} className="mr-2" />
        Copy
      </button>
      {copySuccess && <div className="text-green-600 mt-2">{copySuccess}</div>}
    </div>
  );
};

export default CopyToClipboard;
