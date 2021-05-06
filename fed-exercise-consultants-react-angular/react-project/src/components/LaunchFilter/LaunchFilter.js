import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';

import Select from '../Select';
import TextInput from '../TextInput';
import Button, { TYPES as BUTTON_TYPES } from '../Button';
import styles from './launch-filter.module.scss';
import Data from '../Data.json';

// Example static option value
// the real options will need to come from the api
const options = [];
const years = [];
const datefilter = {year: "numeric"};

//step1
// let ref1=useRef();

Data.map(data => {
  options.push({value: data.launchSiteName, label: data.launchSiteName});
  years.push({value: new Intl.DateTimeFormat('en-US', datefilter).format(new Date(data.launchDate)), label: new Intl.DateTimeFormat('en-US', datefilter).format(new Date(data.launchDate))});
});

const newOptions = Array.from(new Set(options.sort((a,b) => (a.value > b.value) ? 1 : -1).map(JSON.stringify))).map(JSON.parse);

// Data.map(launchtime => {
//   times.push(launchtime.launchDate);
// });

// times.map(time => {
//   years.push({value: new Intl.DateTimeFormat('en-US', datefilter).format(new Date(time)), label: new Intl.DateTimeFormat('en-US', datefilter).format(new Date(time))})
// });

const newYears = Array.from(new Set(years.sort((a,b) => a.value - b.value).map(JSON.stringify))).map(JSON.parse);

// console.log(newYears)
// console.log(new Intl.DateTimeFormat('en-US', datefilter).format(new Date(times[0])));
// console.log(newOptions);

/**
 * Launch filter holds the filter state and writes the changes to the filters
 * back up to the parent element on click of the apply button
 */
class LaunchFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: '',
      launchPad: null,
      minYear: null,
      maxYear: null

      // example state you will need to remove
      // selectedOption: '',
      // exampleInput: '',

    };
  }

  // some change handlers ready for you
  // handleKeywordChange = () => {
  //   this.setState({ keywords: this.state.keywords});   
  // };
  // handleLaunchPadChange = () => {
  //   const [launchPad, setLaunchPad] = useState({});
  // };
  handleMinYearChange = setMinYear => {
    this.setState({ setMinYear });
  };

  handleMaxYearChange = setMaxYear => {
    this.setState({ setMaxYear});
  };

  // and example change handler for a <Select /> element
  handleLaunchPadChange = setLaunchPad => {
    this.setState({ setLaunchPad });
  };

  // an example change handler for a <TextInput /> element
  handleInputChange = setText => {
    this.setState({ setText });
    // console.log("change: ", this);
    // console.log(ref1.val());
  };

  // handler for calling the filter update
  handleFilterUpdate = () => {
    alert('Implement filter update logic');
  };

  render() {
    const { setLaunchPad, setText, setMinYear, setMaxYear } = this.state;

    return (
      <section className={styles.launchFilter}>
        <TextInput
          // ref = {ref1}
          placeholder="eg Falcon"
          value={setText}
          label="Keywords"
          onChange={this.handleInputChange}
          uid="keywords"
        />
        <Select
          label="Launch Pad"
          value={setLaunchPad}
          placeholder="Any"
          onChange={this.handleLaunchPadChange}
          options={newOptions}
          uid="launch-pad"
        />
        <Select
          label="Min Year"
          value={setMinYear}
          placeholder="Any"
          onChange={this.handleMinYearChange}
          options={newYears}
          uid="min-year"
        />
        <Select
          label="Max Year"
          value={setMaxYear}
          placeholder="Any"
          onChange={this.handleMaxYearChange}
          options={newYears}
          uid="max-year"
        />
        <Button onClick={this.handleFilterUpdate} type={BUTTON_TYPES.PRIMARY}>
          Apply
        </Button>
      </section>
    );
  }
}

LaunchFilter.propTypes = {

  // used to let parent component know about changes
  // to the filters
  onFilterChange: PropTypes.func
}

LaunchFilter.defaultProps = {
  onFilterChange: () => {},
}

export default LaunchFilter;
