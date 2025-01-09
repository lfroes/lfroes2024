import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Navigation } from './navigation';
import { QwikCityMockProvider } from '@builder.io/qwik-city';

// NAVIGATION SECTION TESTS CASES

test('[Navigation Component]: Should render navigation href`s', async () => {
  const { screen, render } = await createDOM();
  await render(
    <QwikCityMockProvider>
      <Navigation />
    </QwikCityMockProvider> 
  );

  const navigationLinks = screen.querySelectorAll('a');
  const linkTexts = Array.from(navigationLinks).map((link) => link.href?.toLowerCase());

  expect(linkTexts).toEqual(['/resume', '/projects', '/about', '/', '/contact']);

})
