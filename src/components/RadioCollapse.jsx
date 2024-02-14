import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import Arrow from "../assets/Arrow.png";

const RadioCollapse = ({ title, notificationMethods }) => {
  return (
    <Collapsible defaultOpen={true} className="my-6 ">
      <CollapsibleTrigger>
        <span className="font-bold flex items-center mt-4 gap-1 mb-2 text-nowrap font-poppins">
          <img src={Arrow} className="w-2 h-[6px]" /> {title}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="space-y-4">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center  ">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === "email"}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={notificationMethod.id}
                className="ml-3 block text-sm leading-6 text-white text-nowrap"
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default RadioCollapse;
