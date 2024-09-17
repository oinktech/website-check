// 初始化 EmailJS
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.emailjs.com/dist/email.min.js';
  script.onload = () => {
    emailjs.init('IvkuQf_wwjODhE30t'); // 设置 EmailJS 用户 ID
  };
  document.head.appendChild(script);
})();

class WebsiteOptimizer {
  constructor(config) {
    this.results = {};
    this.email = config.email || '';
    this.interval = (config.interval || 0) * 1000; // 转换为毫秒
    this.reportInterval = null;
    this.init(config);
  }

  init(config) {
    if (config.email && config.interval > 0) {
      this.setEmailSettings(config.email, config.interval);
    }

    // 执行检查功能
    this.performanceTest();
    this.seoCheck();
    this.securityCheck();
    this.cacheTest();
    this.accessibilityCheck();
    this.speedTest();
    this.codeOptimizationCheck();
    this.lazyLoadCheck();
    this.resourceLoadStats();
    this.fileSizeAnalysis();
    this.jsExecutionTime();
    this.cssFileAnalysis();
    this.httpRequestAnalysis();
    this.monitorDOMChanges();
  }

  // 设置电子邮件和发送间隔
  setEmailSettings(email, interval) {
    this.email = email;
    this.interval = interval * 1000; // 转换为毫秒
  }

  // 性能测试
  performanceTest() {
    window.addEventListener('load', () => {
      const performanceData = window.performance.timing;
      const pageLoadTime = performanceData.loadEventEnd - performanceData.navigationStart;
      const domLoadTime = performanceData.domContentLoadedEventEnd - performanceData.navigationStart;
      const firstPaint = performanceData.responseStart - performanceData.navigationStart;

      this.results.performance = {
        pageLoadTime: pageLoadTime,
        domLoadTime: domLoadTime,
        firstPaint: firstPaint,
      };

      console.log('Performance Results:', this.results.performance);
      this.sendReport();
    });
  }

  // SEO 检查
  seoCheck() {
    const title = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const h1 = document.querySelector('h1');
    const viewport = document.querySelector('meta[name="viewport"]');
    const images = document.querySelectorAll('img');

    this.results.seo = {
      title: title || 'No Title Found',
      metaDescription: metaDescription ? metaDescription.content : 'No Meta Description Found',
      h1: h1 ? h1.textContent : 'No H1 Tag Found',
      viewport: viewport ? 'Viewport Set' : 'No Viewport Meta Tag',
      imagesWithoutAlt: Array.from(images).filter(img => !img.alt).length,
    };

    console.log('SEO Check Results:', this.results.seo);
    this.sendReport();
  }

  // 安全性检查
  securityCheck() {
    const isHTTPS = location.protocol === 'https:';
    const hasSecurityHeaders = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    const referrerPolicy = document.querySelector('meta[name="referrer"]');
    const xContentTypeOptions = document.querySelector('meta[http-equiv="X-Content-Type-Options"]');

    this.results.security = {
      https: isHTTPS,
      contentSecurityPolicy: !!hasSecurityHeaders,
      referrerPolicy: !!referrerPolicy,
      xContentTypeOptions: !!xContentTypeOptions,
    };

    console.log('Security Check Results:', this.results.security);
    this.sendReport();
  }

  // 缓存检查
  cacheTest() {
    const cacheControl = document.querySelector('meta[http-equiv="Cache-Control"]');
    const expiresHeader = document.querySelector('meta[http-equiv="Expires"]');

    this.results.cache = {
      cacheControl: cacheControl ? cacheControl.content : 'No Cache-Control Header Found',
      expires: expiresHeader ? expiresHeader.content : 'No Expires Header Found',
    };

    console.log('Cache Test Results:', this.results.cache);
    this.sendReport();
  }

  // 可访问性检查
  accessibilityCheck() {
    const ariaElements = document.querySelectorAll('[aria-label], [role]');
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    const buttonsWithoutLabels = document.querySelectorAll('button:not([aria-label])');

    this.results.accessibility = {
      ariaElementsCount: ariaElements.length,
      imagesWithoutAlt: imagesWithoutAlt.length,
      buttonsWithoutLabels: buttonsWithoutLabels.length,
    };

    console.log('Accessibility Check Results:', this.results.accessibility);
    this.sendReport();
  }

  // 网页速度检查
  speedTest() {
    const resources = window.performance.getEntriesByType('resource');
    const slowResources = resources.filter(res => res.duration > 500); // 过滤加载时间超过 500ms 的资源

    this.results.speed = {
      totalResources: resources.length,
      slowResources: slowResources.map(res => ({
        name: res.name,
        loadTime: res.duration.toFixed(2),
      })),
    };

    console.log('Speed Test Results:', this.results.speed);
    this.sendReport();
  }

  // 代码优化建议
  codeOptimizationCheck() {
    const scripts = document.querySelectorAll('script');
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    const unminifiedJs = Array.from(scripts).filter(script => script.src && !script.src.includes('.min.js'));
    const unminifiedCss = Array.from(cssLinks).filter(link => link.href && !link.href.includes('.min.css'));

    this.results.codeOptimization = {
      unminifiedJs: unminifiedJs.length ? unminifiedJs.map(script => script.src) : 'All JS Minified',
      unminifiedCss: unminifiedCss.length ? unminifiedCss.map(link => link.href) : 'All CSS Minified',
    };

    console.log('Code Optimization Check Results:', this.results.codeOptimization);
    this.sendReport();
  }

  // 延迟加载检查
  lazyLoadCheck() {
    const images = document.querySelectorAll('img');
    const lazyLoadImages = Array.from(images).filter(img => img.loading === 'lazy');

    this.results.lazyLoad = {
      totalImages: images.length,
      lazyLoadedImages: lazyLoadImages.length,
      imagesWithoutLazyLoad: images.length - lazyLoadImages.length,
    };

    console.log('Lazy Load Check Results:', this.results.lazyLoad);
    this.sendReport();
  }

  // 资源加载统计
  resourceLoadStats() {
    const resources = window.performance.getEntriesByType('resource');
    const resourceDetails = resources.map(res => ({
      name: res.name,
      type: res.initiatorType,
      duration: res.duration.toFixed(2),
      size: res.transferSize ? res.transferSize / 1024 : 'N/A',
    }));

    this.results.resourceStats = resourceDetails;

    console.log('Resource Load Statistics:', this.results.resourceStats);
    this.sendReport();
  }

  // 文件大小分析
  fileSizeAnalysis() {
    const resources = window.performance.getEntriesByType('resource');
    const largeFiles = resources.filter(res => res.transferSize && res.transferSize > 1024 * 50); // 文件大于 50KB

    this.results.fileSize = {
      largeFiles: largeFiles.map(file => ({
        name: file.name,
        size: (file.transferSize / 1024).toFixed(2) + ' KB',
      })),
    };

    console.log('File Size Analysis:', this.results.fileSize);
    this.sendReport();
  }

  // JavaScript 执行时间
  jsExecutionTime() {
    const scripts = document.querySelectorAll('script');
    const scriptExecutionTimes = [];

    scripts.forEach(script => {
      if (script.src) {
        const startTime = performance.now();
        script.onload = () => {
          const endTime = performance.now();
          scriptExecutionTimes.push({
            src: script.src,
            executionTime: (endTime - startTime).toFixed(2),
          });
        };
      }
    });

    this.results.jsExecution = scriptExecutionTimes;

    console.log('JavaScript Execution Time:', this.results.jsExecution);
    this.sendReport();
  }

  // CSS 文件分析
  cssFileAnalysis() {
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    const cssFileDetails = [];

    cssLinks.forEach(link => {
      const startTime = performance.now();
      link.onload = () => {
        const endTime = performance.now();
        cssFileDetails.push({
          href: link.href,
          loadTime: (endTime - startTime).toFixed(2),
        });
      };
    });

    this.results.cssAnalysis = cssFileDetails;

    console.log('CSS File Analysis:', this.results.cssAnalysis);
    this.sendReport();
  }

  // HTTP 请求分析
  httpRequestAnalysis() {
    const resources = window.performance.getEntriesByType('resource');
    const failedRequests = resources.filter(res => res.responseStatus >= 400);

    this.results.httpRequests = {
      totalRequests: resources.length,
      failedRequests: failedRequests.map(req => ({
        name: req.name,
        status: req.responseStatus,
      })),
    };

    console.log('HTTP Request Analysis:', this.results.httpRequests);
    this.sendReport();
  }

  // DOM 变更监控
  monitorDOMChanges() {
    const observer = new MutationObserver(mutations => {
      this.results.domChanges = mutations.map(mutation => ({
        type: mutation.type,
        addedNodes: mutation.addedNodes.length,
        removedNodes: mutation.removedNodes.length,
      }));

      console.log('DOM Changes:', this.results.domChanges);
      this.sendReport();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  // 发送报告
  sendReport() {
    if (this.email && this.interval) {
      if (this.reportInterval) clearInterval(this.reportInterval);

      this.reportInterval = setInterval(() => {
        const report = this.generateReport();
        emailjs.send('service_rlz26rk', 'template_319z66s', {
          to_email: this.email,
          report: JSON.stringify(report),
        }).then(response => {
          console.log('Report sent successfully:', response);
        }).catch(error => {
          console.error('Error sending report:', error);
        });
      }, this.interval);
    }
  }

  // 生成报告
  generateReport() {
    return this.results;
  }
}

// 动态引入用户脚本
window.addEventListener('load', () => {
  const userScriptUrl = 'https://yourdomain.com/user-custom-script.js'; // 用户自定义脚本 URL

  const script = document.createElement('script');
  script.src = userScriptUrl;
  document.body.appendChild(script);
});
