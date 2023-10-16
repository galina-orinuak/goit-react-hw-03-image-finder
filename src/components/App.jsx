import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    galerryArr: [],
    page: 1,
    showBtn: false,
    showLoader: false,
    showModal:false,
    showImg:''
  };

  onSubmitForm = query => {
    this.setState({ query: '', galerryArr: [] });
    this.setState({ query: query });
    this.fetchApi(query, 1);
  };

  onButtomLoadMOre =()=>{
    this.fetchApi(this.state.query,  this.state.page+1);
    this.setState(prevState => ({page:prevState.page+1}))
  }

  showModal = ()=>{
    this.setState({showModal:true})
  }

  hideModal = ()=>{
    this.setState({showModal:false})
  }

  showImg = imgLink => {
    this.setState({showImg: imgLink})
  }

  fetchApi(query, page) {
    const BASE_URL = 'https://pixabay.com/api/?';
    const API_KEY = '39241175-920eb89e79fcd4cc7c8ced0a6';
    const PER_PAGE = '12';
    // const params = new URLSearchParams({
    //   key: API_KEY,
    //   q: {query},
    //   image_type: 'photo',
    //   orientation: 'horizontal',
    //   page: {page},
    //   per_page: PER_PAGE,
    // });
    // let URL = `${BASE_URL}${params}`;

    let URL = `${BASE_URL}q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;

    this.setState({ showLoader: true });

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(prevState => ({
          galerryArr: [...prevState.galerryArr, ...data.hits],
        }));

        const numberOfImages = data.totalHits;
        const downloadImages = PER_PAGE * this.state.page;
        numberOfImages > downloadImages ? this.setState({ showBtn: true }) : this.setState({ showBtn: false })

        this.setState({ showLoader: false })
         
      })
      .catch(error => {
        this.setState({ error });
      });
  }
  render() {
    return (
      <>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        <ImageGallery images={this.state.galerryArr} showModal={this.showModal} showImg={this.showImg}/>
        {this.state.showBtn && <Button onClick={this.onButtomLoadMOre}/>}
        {this.state.showLoader && <Loader />}
        {this.state.showModal && <Modal showImg={this.state.showImg} hideModal={this.hideModal}/>}
      </>
    );
  }
}
