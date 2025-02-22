import { Suspense } from "react";
import { Outlet } from "react-router";

const LayoutAuth = () => {
  return (
    <div>
      <div className={""}>
        <Suspense fallback={<div>Loading Content...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default LayoutAuth;
