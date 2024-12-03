import { NextRequest, NextResponse } from 'next/server';

const defaultLocale = 'es';
let locales = ['en', 'es', 'fr'];

type PathnameLocale = {
  pathname: string;
  locale?: never;
};
type ISOLocale = {
  pathname?: never;
  locale: string;
};

type LocaleSource = PathnameLocale | ISOLocale;

const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
  if (locale) {
    const localeParts = locale.toLowerCase().split('-');
    return {
      lang: localeParts[0]
    };
  } else {
    const pathnameParts = pathname!.toLowerCase().split('/');
    return {
      lang: pathnameParts[1]
    };
  }
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const defaultLocaleParts = getLocalePartsFrom({ locale: defaultLocale });
  const currentPathnameParts = getLocalePartsFrom({ pathname });

  if (currentPathnameParts.lang === defaultLocaleParts.lang) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocaleParts.lang}`,
          pathname !== `/${defaultLocaleParts.lang}` ? '' : '/'
        ),
        request.url
      )
    );
  }

  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(new URL(`/${defaultLocaleParts.lang}${pathname}`, request.url));
  }
}

export const config = {
  // do not localize next.js paths
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};
