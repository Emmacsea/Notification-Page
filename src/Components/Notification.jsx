import {useState} from "react";
import mark from "../assets/assets/images/avatar-mark-webber.webp";
import angela from "../assets/assets/images/avatar-angela-gray.webp";
import jacob from "../assets/assets/images/avatar-jacob-thompson.webp";
import rizky from "../assets/assets/images/avatar-rizky-hasanuddin.webp";
import smith from "../assets/assets/images/avatar-kimberly-smith.webp";
import chess from "../assets/assets/images/image-chess.webp"
import nate from "../assets/assets/images/avatar-nathan-peterson.webp";
import kim from "../assets/assets/images/avatar-anna-kim.webp";

export default function Notification() {
  const [isMessage, setMessage] = useState(false);
  const [isComment, setComment] = useState(false);

  return (
    <div className="flex justify-center items-center py-10 bg-neutral-white">
      <div className="bg-neutral-white shadow-md h-auto w-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-neutral-vdarkblue text-xl font-bold">
            Notifications{" "}
            <button className="rounded-md text-neutral-lgrayishblue bg-primary-blue text-xs px-2 py-1">
              3
            </button>
          </p>
          <button>
            <p className="hover:text-primary-blue font-bold">Mark all as read</p>
          </button>
        </div>

        <div className="bg-neutral-lgrayishblue rounded-md flex items-center text-xs gap-3 py-3 px-3 mb-2">
          <div>
            <img className="w-10" src={mark} alt="" />
          </div>

          <div>
            <p className="text-neutral-vdarkblue font-bold text-xl">
              Mark Webster{" "}
              <span className="text-neutral-grayishblue text-xs font-medium">
                {" "}
                reacted to your recent post{" "}
              </span>{" "}
              <span className="text-neutral-dgrayishblue text-xs font-bold hover:text-primary-blue">
                {" "}
                My first tournament today!.
              </span>
            </p>
            <p className="text-neutral-grayishblue text-xs font-medium">
              1m ago
            </p>
          </div>
        </div>

        <div className="bg-neutral-lgrayishblue rounded-md flex items-center text-xs gap-3 py-3 px-3 mb-2">
          <div>
            <img className="w-10" src={angela} alt="" />
          </div>

          <div>
            <p className="text-neutral-vdarkblue font-bold text-xl hover:text-primary-blue">
              Angela Gray{" "}
              <span className="text-neutral-grayishblue text-xs font-medium">
                {" "}
                followed you{" "}
              </span>
            </p>
            <p className="text-neutral-grayishblue text-xs font-medium">
              5m ago
            </p>
          </div>
        </div>

        <div className="bg-neutral-lgrayishblue rounded-md flex items-center text-xs gap-3 py-3 px-3 mb-4">
          <div>
            <img className="w-10" src={jacob} alt="" />
          </div>

          <div>
            <p className="text-neutral-vdarkblue font-bold text-xl">
              Jacob Thompson{" "}
              <span className="text-neutral-grayishblue text-xs font-medium">
                {" "}
                has joined your group{" "}
              </span>{" "}
              <span className="text-primary-blue font-bold text-xl">
                {" "}
                Chess Club
              </span>
            </p>
            <p className="text-neutral-grayishblue text-xs font-medium">
              1day ago
            </p>
          </div>
        </div>

        <div className="mb-4" onClick={() => setMessage(!isMessage)}>
        <div className="rounded-md flex items-center text-xs gap-3 py-3 px-3 mb-2">
          <div>
            <img className="w-10" src={rizky} alt="" />
          </div>

          <div>
            <p className="text-neutral-vdarkblue font-bold text-xl">
              Rizky Hasanuddln{" "}
              <span className="text-neutral-grayishblue text-xs font-medium">
                {" "}
                sent you a private message{" "}
              </span>{" "}              
            </p>
            <p className="text-neutral-grayishblue text-xs font-medium">
              5days ago
            </p>
          </div>
        </div>

        {isMessage && (
            <div className="border-2 border-neutral-lgrayishblue p-3 rounded-md ml-16 mr-4 hover:bg-neutral-lgrayishblue2">
            <p className="text-neutral-grayishblue text-xl font-medium hover:text-neutral-dgrayishblue">
                Hello, thanks for setting up the Chess Club. I&apos;ve been a
                member for a few weeks now and i&apos;m already having lots of fun and
                improving my game.
            </p>

        </div>
        )}
        </div>

        <div className="mb-4" onClick={() => setComment(!isComment)}>
        <div className="flex justify-between">
        <div className="rounded-md flex items-center text-xs gap-3 py-3 px-3 mb-2">
          <div>
            <img className="w-10" src={smith} alt="" />
          </div>

          <div>
           <div>
           <p className="text-neutral-vdarkblue font-bold text-xl">
              Kimberly Smith{" "}
              <span className="text-neutral-grayishblue text-xs font-medium">
                {" "}
                commented on your profile picture{" "}
              </span>{" "}              
            </p>
            <p className="text-neutral-grayishblue text-xs font-medium">
              1week ago
            </p>
           </div>
          </div>                  
        </div>

        <div>
            <img className="w-10" src={chess} alt="" />
          </div>

        
        </div>

        {isComment && (
            <div className="border-2 border-neutral-lgrayishblue p-3 rounded-md ml-16 mr-4">
                <p>
                    What a lovely picture!
                </p>
            </div>
        )}
        </div>

        <div className="rounded-md flex items-center text-xs gap-3 py-3 px-3 mb-2">
          <div>
            <img className="w-10" src={nate} alt="" />
          </div>

          <div>
            <p className="text-neutral-vdarkblue font-bold text-xl">
              Nathan Peterson{" "}
              <span className="text-neutral-grayishblue text-xs font-medium">
                {" "}
                reacted to your recent post{" "}
              </span>{" "}
              <span className="text-neutral-dgrayishblue text-xs font-bold">
                {" "}
                5 end-game strategies to increase your win rate.
              </span>
            </p>
            <p className="text-neutral-grayishblue text-xs font-medium">
              2weeks ago
            </p>
          </div>
        </div>  

        <div className="rounded-md flex items-center text-xs gap-3 py-3 px-3 mb-4">
          <div>
            <img className="w-10" src={kim} alt="" />
          </div>

          <div>
            <p className="text-neutral-vdarkblue font-bold text-xl">
              Anna Kim{" "}
              <span className="text-neutral-grayishblue text-xs font-medium">
                {" "}
                left the group{" "}
              </span>{" "}
              <span className="text-primary-blue font-bold text-xl">
                {" "}
                Chess Club
              </span>
            </p>
            <p className="text-neutral-grayishblue text-xs font-medium">
              2weeks ago
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
