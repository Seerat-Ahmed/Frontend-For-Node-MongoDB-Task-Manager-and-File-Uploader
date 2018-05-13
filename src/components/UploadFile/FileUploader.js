import React, { Component } from 'react';
import './FileUploader.css';
import { showFilesService, uploadFileService } from '../../services/file';
import FileList from '../FileList/FileList';

class FileUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            file: '',
        }

        this.onFileUpload = this.onFileUpload.bind(this);
    }

    componentWillMount() {
        showFilesService()
            .then((res) => {
                if (res.status === 200)
                    this.setState({ files: res.data })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    upload() {
        console.log(this.state.file);
        if (this.state.file !== '') {
            uploadFileService(this.state.file)
                .then((res) => {
                    this.setState({ files: [res.data, ...this.state.files] })
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    onFileUpload(e) {
        let file = e.target.files[0];
        this.setState({ file: file })
    }

    render() {

        return (
            <div className="file-uploader">
                <br />
                <div className="custom-file">
                    <input
                        onChange={this.onFileUpload}
                        ref={(el) => this.fileUpload = el}
                        type="file"
                        className="custom-file-input"
                        id="validatedCustomFile" />
                    <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                </div>
                <button onClick={() => this.upload()} className="btn btn-primary">
                    Upload
                </button>
                <br />
                <br />
                <FileList files={this.state.files} />
            </div>
        )
    }
}

export default FileUploader;