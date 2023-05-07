import { useEffect, useState } from "react";
import "./CommentTmp.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import CommentInfoModal from "../CommentInfoModal/CommentInfoModal";
import CommentConfirmModal from "../CommentConfirmModal/CommentConfirmModal";
import CommentAnswer from "../CommentAnswer/CommentAnswer";
import CommentEdit from "../CommentEdit/CommentEdit";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
export const CommentTmp = () => {
  const [commentsData, setCommentsData] = useState([]);
  const [showCommentInfo, setShowCommentInfo] = useState(false);
  const [commentBody, setCommentBody] = useState(null);
  const [showCommentConfirm, setShowCommentConfirm] = useState(false);
  const [showCommentReject, setShowCommentReject] = useState(false);
  const [commentID, setCommentID] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [commentAnswer, setCommentAnswer] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //get data from server 

  const getData = () => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((data) => {
        setCommentsData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  //info Modal

  const showCommentHandler = (commentBody) => {
    setShowCommentInfo(true), setCommentBody(commentBody);
  };
  const closeInfoModal = () => {
    setShowCommentInfo(false);
  };

  //CommentConfirmModal//

  const confirmCommentHandler = (commentDataId) => {
    setShowCommentConfirm(true);
    setCommentID(commentDataId);
  };

  const submitConfirm = () => {
    fetch(`http://localhost:8000/api/comments/accept/${commentID}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getData();
      });
    setShowCommentConfirm(false);
  };

  const cancelConfirm = () => {
    setShowCommentConfirm(false);
  };

  //reject comment

  const rejectCommentHandler = (commentId) => {
    setCommentID(commentId);
    setShowCommentReject(true);
  };

  const submitReject = () => {
    fetch(`http://localhost:8000/api/comments/reject/${commentID}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getData();
      });
    setShowCommentReject(false);
  };

  const cancelReject = () => {
    setShowCommentReject(false);
  };

  //CommentAnswer//

  const answerCommentHandler = (commentDataId) => {
    setShowAnswer(true);
    setCommentID(commentDataId);
  };
  const submitComment = () => {
    setShowAnswer(false);
  };

  const cancelComment = () => {
    setShowAnswer(false);
  };

  //Edit Modal
  
  const editCommentHandler = (commentDataId, commentData, CommentDataBody) => {
    setShowEdit(true);
    setCommentID(commentDataId);
    setCommentBody(CommentDataBody);
  };
  const submitEdit = () => {
    setShowEdit(false);

    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        body: commentBody,
      }),
    }).then((res) => {
      console.log(res);
      getData();
    });
  };

  const cancelEdit = () => {
    setShowEdit(false);
  };

  //delete Comment

  const deleteCommentHandler = (commentDataId) => {
    setCommentID(commentDataId);
    setShowDeleteModal(true);
  };
  const submitDelete = () => {
    setShowDeleteModal(false);
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      getData();
    });
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };
  return (
    <>
      {commentsData ? (
        <div className='comment-table w-full overflow-x-auto p-0 md:p-4 rounded mt-8 text-sm md:text-lg flex justify-center '>
          <table className=' border-collapse w-full m-1] table-auto'>
            <thead className='bg-blue-100 text-blue-900 border border-blue-950'>
              <tr>
                <th scope='col' className=''>
                  نام کاربر
                </th>
                <th scope='col' className=''>
                  محصول
                </th>
                <th>محتویات کامنت</th>
                <th scope='col' className=''>
                  تاریخ
                </th>
                <th scope='col' className=''>
                  ساعت
                </th>
                <th>تایید </th>
              </tr>
            </thead>
            <tbody>
              {commentsData.map((commentData) => (
                <tr
                  key={commentData.id}
                  className='bg-gray-100 even:bg-gray-300'>
                  <td scope='col' className='newProduct-name  '>
                    <h6>{commentData.userID}</h6>
                  </td>
                  <td scope='col' className=' '>
                    <h6>{commentData.productID}</h6>
                  </td>
                  <td>
                    <button
                      onClick={() => showCommentHandler(commentData.body)}
                      className='bg-blue-900 w-[90px] md:w-[120px] p-1 rounded text-white'>
                      دیدین کامنت
                    </button>
                  </td>
                  <td scope='col' className=' '>
                    <h6>{commentData.date}</h6>
                  </td>
                  <td scope='col' className=' '>
                    <h6>{commentData.hour}</h6>
                  </td>
                  <td className='flex w-full flex-col justify-center md:flex-row space-y-1 md:space-y-0'>
                    {!commentData.isAccept ? (
                      <button
                        onClick={() => confirmCommentHandler(commentData.id)}
                        className='bg-blue-900 w-[75px] p-1 rounded text-white ms-2'>
                        تایید
                      </button>
                    ) : (
                      <button
                        onClick={() => rejectCommentHandler(commentData.id)}
                        className='bg-blue-900 w-[75px] p-1 rounded text-white ms-2'>
                        رد
                      </button>
                    )}

                    <button
                      onClick={() => answerCommentHandler(commentData.id)}
                      className='bg-purple-900 w-[75px] p-1 rounded text-white ms-2'>
                      پاسخ
                    </button>
                    <button
                      onClick={() =>
                        editCommentHandler(
                          commentData.id,
                          commentData,
                          commentData.body
                        )
                      }
                      className='bg-blue-500 w-[75px] p-1 rounded text-white ms-2'>
                      ویرایش
                    </button>
                    <button
                      onClick={() => deleteCommentHandler(commentData.id)}
                      className='bg-gray-600 w-[75px] p-1 rounded text-white ms-2'>
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ErrorBox msg={"پیامی وجود ندارد"} />
      )}
      {showCommentInfo && (
        <CommentInfoModal commentBody={commentBody} onClose={closeInfoModal} />
      )}
      {showCommentConfirm && (
        <CommentConfirmModal
          submitConfirm={submitConfirm}
          cancelConfirm={cancelConfirm}
          title={"آیا با تایید کامنت موافق هستید؟"}
        />
      )}
      {showCommentReject && (
        <CommentConfirmModal
          submitConfirm={submitReject}
          cancelConfirm={cancelReject}
          title={"آیا با رد کامنت موافق هستید؟"}
        />
      )}

      <CommentAnswer
        showAnswer={showAnswer}
        submitComment={submitComment}
        cancelComment={cancelComment}
        commentAnswer={commentAnswer}
        setCommentAnswer={setCommentAnswer}
      />
      <CommentEdit
        submitEdit={submitEdit}
        cancelEdit={cancelEdit}
        setCommentBody={setCommentBody}
        commentBody={commentBody}
        showEdit={showEdit}
      />
      {showDeleteModal && (
        <DeleteModal
          title={"آیا از حذف کامنت اطمینان دارید؟"}
          submitAction={submitDelete}
          cancelAction={cancelDelete}
        />
      )}
    </>
  );
};

export default CommentTmp;
