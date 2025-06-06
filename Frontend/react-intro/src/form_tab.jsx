import React, { useState } from 'react';
import './styles.css';

function TabbedForms() {
  const [activeTab, setActiveTab] = useState('form1');

  const renderForm = () => {
    switch (activeTab) {
      case 'form1':
        return (
          <form>
            <label htmlFor="name1">Name:</label>
            <input type="text" id="name1" name="name1" />
            <label htmlFor="email1">Email:</label>
            <input type="email" id="email1" name="email1" />
            <button type="submit">Submit Form 1</button>
          </form>
        );
      case 'form2':
        return (
          <form>
            <label htmlFor="collegename">College:</label>
            <input type="text" id="collegename" name="collegename" />
            <label htmlFor="batch">Batch:</label>
            <input type="text" id="batch" name="batch" />
            <button type="submit">Submit Form 2</button>
          </form>
        );
      case 'form3':
        return (
          <form>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
            <label htmlFor="houseno">House Number:</label>
            <input type="text" id="houseno" name="houseno" />
            <button type="submit">Submit Form 3</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === 'form1' ? 'active' : ''}`}
          onClick={() => setActiveTab('form1')}
        >
          Form 1
        </button>
        <button
          className={`tab-button ${activeTab === 'form2' ? 'active' : ''}`}
          onClick={() => setActiveTab('form2')}
        >
          Form 2
        </button>
        <button
          className={`tab-button ${activeTab === 'form3' ? 'active' : ''}`}
          onClick={() => setActiveTab('form3')}
        >
          Form 3
        </button>
      </div>
      {renderForm()}
    </div>
  );
}

export default TabbedForms;
