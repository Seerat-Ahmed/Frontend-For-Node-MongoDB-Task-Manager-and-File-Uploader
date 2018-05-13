import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { downloadFile } from '../../services/file';
import fileDownload from 'js-file-download';

class FileList extends Component {
    constructor(props) {
        super(props);

        this.downloadFile = this.downloadFile.bind(this);
    }

    downloadFile(e) {

        let fileName = e.target.id;
        downloadFile(fileName)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    let reader = new window.FileReader();
                    reader.readAsDataURL(res.data);
                    fileDownload(reader.result, fileName);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.files && this.props.files.map((file, index) => {
                        return (
                            <div key={index} className="file">
                                <Link to="/files" download>
                                    <img className="image" onClick={this.downloadFile} id={file} src={require('../../logo.svg')} alt="File" />
                                </Link>
                                <div className="alert alert-primary">{file}</div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}


export default FileList;