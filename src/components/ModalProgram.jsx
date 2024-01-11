import Modal from 'react-bootstrap/Modal';
function transformObject(inputObject) {
    const programKeys = Object.keys(inputObject).filter(key => key.startsWith('program'));
    const transformedObject = {
        bidang: inputObject.bidang,
        gambar: inputObject.gambar,
        program: programKeys.map(key => ({ text: inputObject[key] }))
    };

    return transformedObject;
}
const ModalProgram = (props) => {
    // console.log(props);
    const obj = props.data.length > 0 ? transformObject(props.data[0]) : []

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            scrollable
            contentClassName='bg-semiwarning'
        >

            <Modal.Body scrollable={true}>
                <div className="container px-5 py-4">
                    <h2 className='bg-semigreen p-3 text-center rounded-semi text-white'>Program Kerja {props.bidang}</h2>
                    {
                        obj.program ? obj.program.map((val, i) => {
                            const [title, description] = val.text.split('|')
                            // console.log(title);
                            return (

                                <div key={i} className="card-program-kerja bg-semiwarning2 text-black">
                                    <p className="text-title font-bold">
                                        <b>{title}</b>
                                    </p>
                                    <p className=" text-subtitle"> {description} </p>
                                </div>
                            )
                        }
                            // <CardProgja key={i} />
                        ) : null
                    }
                    {/* <CardProgja />
                    <CardProgja /> */}
                </div>
            </Modal.Body>

        </Modal>
    );
}
const CardProgja = () => {
    return (
        <>
            <div className="card-program-kerja bg-semiwarning2 text-black">
                <p className="text-title font-bold">
                    <b>Rapat Kerja Internal</b>
                </p>
                <p className=" text-subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, omnis ullam illum debitis aut harum dolorum aspernatur tempora? Animi dolores error assumenda? Ea atque vitae dolorem architecto maxime fuga ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tempora repellendus sunt, aspernatur id sapiente assumenda, iure totam sint illum quibusdam excepturi quisquam ad ullam tempore iusto aliquid vero! Esse, impedit animi exercitationem soluta reiciendis architecto quo distinctio aspernatur quis fuga omnis, sapiente accusamus dolores voluptatibus commodi vero ipsam consequatur?</p>
            </div>
        </>
    )
}
export default ModalProgram
