import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchImages } from 'services/fetchImages';

export class App extends Component {
  state = {
    query: '',
    galerryArr: [],
    page: 1,
    showBtn: false,
    showLoader: false,
    showModal: false,
    showImg: '',
  };

  onSubmitForm = query => {
    this.setState({ query, galerryArr: [], page: 1 });
  };

  onButtomLoadMOre = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  showImg = imgLink => {
    this.setState({ showImg: imgLink });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ showLoader: true });
        const  {data} = await fetchImages(query, page);

        const PER_PAGE = '12';
        const numberOfImages = data.totalHits;
        const downloadImages = PER_PAGE * this.state.page;
        if (
          numberOfImages > downloadImages
            ? this.setState({ showBtn: true })
            : this.setState({ showBtn: false })
        ) {
        }
        this.setState(prevState => ({
                  galerryArr: [...prevState.galerryArr, ...data.hits],
                }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ showLoader: false });
      }
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        <ImageGallery
          images={this.state.galerryArr}
          showModal={this.showModal}
          showImg={this.showImg}
        />
        {this.state.showBtn && <Button onClick={this.onButtomLoadMOre} />}
        {this.state.showLoader && <Loader />}
        {this.state.showModal && (
          <Modal showImg={this.state.showImg} hideModal={this.hideModal} />
        )}
      </>
    );
  }
}


