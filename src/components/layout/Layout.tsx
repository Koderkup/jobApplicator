import { Suspense } from 'react';
import { Outlet } from 'react-router';

import Header from './header/Header';
const Layout = () => {
    return (
        <div>
            <div className={''}>
                <Suspense fallback={<div>Loading Header...</div>}>
                    <Header />
                </Suspense>
                <div className={'container'}>
                    <div className={''}>
                        <Suspense fallback={<div>Loading Content...</div>}>
                            <Outlet />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
