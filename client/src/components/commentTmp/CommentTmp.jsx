import React, { useEffect, useState } from "react";
import "./CommentTmp.css";
import ErrorBox from "../ErrorBox/ErrorBox";
import CommentInfoModal from "../CommentInfoModal/CommentInfoModal";
import CommentConfirmModal from "../CommentConfirmModal/CommentConfirmModal";
export const CommentTmp = () => {
  const [commentsData, setCommentsData] = useState([]);
  const [showCommentInfo, setShowCommentInfo] = useState(false);
  const [commentBody, setCommentBody] = useState(null);
  const [showCommentConfirm, setShowCommentConfirm] = useState(false);
  const [commentID, setCommentId] = useState(null);
  const [newCommentData, setNewCommentData] = useState({});
  const [isAccept, setIsAccept] = useState("0");
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
  const submitAction = () => {
    setIsAccept("1");
    setShowCommentConfirm(false);
    setNewCommentData((prv) => ({ ...prv, isAccept: isAccept }));
    console.log(commentID);
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newCommentData),
    }).then((res) => {
      res.json();
      getData();
    });
  };
  const cancelAction = () => {
    setShowCommentConfirm(false);
  };
  return (
    <>
      {commentsData ? (
        <div className='w-full overflow-x-auto p-0 md:p-4 rounded mt-8 text-sm md:text-lg '>
          <table className=' border-collapse w-full table-auto'>
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
                      onClick={() => {
                        setShowCommentInfo(true),
                          setCommentBody(commentData.body);
                      }}
                      className='bg-blue-900 w-[120px] px-1 py-2 rounded text-white'>
                      دیدین کامنت
                    </button>
                  </td>
                  <td scope='col' className=' '>
                    <h6>{commentData.date}</h6>
                  </td>
                  <td scope='col' className=' '>
                    <h6>{commentData.hour}</h6>
                  </td>
                  <td className="flex w-full flex-col md:flex-row">
                    <button
                      onClick={() => {
                        setShowCommentConfirm(true);
                        setCommentId(commentData.id);
                        setNewCommentData(commentData);
                      }}
                      className='bg-blue-900 w-[75px] px-1 py-2 rounded text-white ms-2'>
                      تایید
                    </button>
                    <button
                      onClick={() => {
                        setShowCommentConfirm(true);
                        setCommentId(commentData.id);
                        setNewCommentData(commentData);
                      }}
                      className='bg-purple-900 w-[75px] px-1 py-2 rounded text-white ms-2'>
                      پاسخ
                    </button>
                    <button
                      onClick={() => {
                        setShowCommentConfirm(true);
                        setCommentId(commentData.id);
                        setNewCommentData(commentData);
                      }}
                      className='bg-blue-500 w-[75px] px-1 py-2 rounded text-white ms-2'>
                      ویرایش
                    </button>
                    <button
                      onClick={() => {
                        setShowCommentConfirm(true);
                        setCommentId(commentData.id);
                        setNewCommentData(commentData);
                      }}
                      className='bg-gray-600 w-[75px] px-1 py-2 rounded text-white ms-2'>
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
      <CommentInfoModal
        commentBody={commentBody}
        showCommentInfo={showCommentInfo}
        setShowCommentInfo={setShowCommentInfo}
      />
      <CommentConfirmModal
        submitAction={submitAction}
        cancelAction={cancelAction}
        showCommentConfirm={showCommentConfirm}
      />
    </>
  );
};

export default CommentTmp;
