import { useEffect } from 'react';

export const YandexMetrika = () => {
  useEffect(() => {
    // Вставка основного скрипта
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      ym(102493425, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
    `;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // <noscript> поддержка для Яндекс.Метрики
  return (
    <noscript>
      <div>
        <img src="https://mc.yandex.ru/watch/102493425" style={{ position: 'absolute', left: '-9999px' }} alt="" />
      </div>
    </noscript>
  );
}; 