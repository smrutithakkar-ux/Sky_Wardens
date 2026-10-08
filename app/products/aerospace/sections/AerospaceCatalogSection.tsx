"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  aerospaceCategories,
  AerospaceCategory,
  ProductCardItem,
} from "../data";
import styles from "./AerospaceCatalogSection.module.css";

export default function AerospaceCatalogSection() {
  const [activeId, setActiveId] = useState<string>(aerospaceCategories[0].id);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductCardItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };
    if (selectedProduct) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  const handleCategoryClick = (id: string) => {
    setActiveId(id);
  };

  const activeCategory =
    aerospaceCategories.find((cat) => cat.id === activeId) ||
    aerospaceCategories[0];

  return (
    <section className={styles.section} aria-label="Aerospace Products Catalog">
      <div className={styles.inner}>
        {/* ========================================
            LEFT STICKY SIDEBAR
            ======================================== */}
        <aside className={styles.sidebarWrapper}>
          <div className={styles.sidebarCard}>
            <div className={styles.sidebarHeader}>
              <span className={styles.sidebarEyebrow}>Product Index</span>
              <h3 className={styles.sidebarTitle}>Aerospace Systems</h3>
            </div>

            <nav aria-label="Aerospace Platforms Navigation">
              <ul className={styles.navList}>
                {aerospaceCategories.map((cat: AerospaceCategory) => {
                  const isActive = activeId === cat.id;

                  return (
                    <li key={cat.id} className={styles.navItem}>
                      <button
                        type="button"
                        className={`${styles.navButton} ${
                          isActive ? styles.navButtonActive : ""
                        }`}
                        onClick={() => handleCategoryClick(cat.id)}
                        aria-current={isActive ? "true" : undefined}
                      >
                        <span className={styles.navNumber}>{cat.number}.</span>
                        <span className={styles.navName}>{cat.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>

        {/* ========================================
            RIGHT PRODUCT CATEGORY SECTION (ACTIVE ONLY)
            ======================================== */}
        <div className={styles.contentArea}>
          <article
            key={activeCategory.id}
            id={activeCategory.id}
            className={styles.categorySection}
          >
            <div className={styles.categoryHeader}>
              <span className={styles.categoryEyebrow}>
                {activeCategory.number} / AEROSPACE DIVISION
              </span>
              <h2 className={styles.categoryTitle}>{activeCategory.name}</h2>
              {activeCategory.tagline && (
                <p className={styles.categoryTagline}>
                  {activeCategory.tagline}
                </p>
              )}
            </div>

            {/* 1st Category (Surveillance Systems): Show 7 Product Cards in our Theme */}
            {activeCategory.products && activeCategory.products.length > 0 ? (
              <div className={styles.productsGrid}>
                {activeCategory.products.map((product: ProductCardItem) => (
                  <div key={product.id} className={styles.productCard}>
                    <div className={styles.productImageWell}>
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        className={styles.productImage}
                      />
                    </div>

                    <div className={styles.productBody}>
                      <h3 className={styles.productName}>{product.name}</h3>
                      <p className={styles.productDescription}>
                        {product.description}
                      </p>
                      <button
                        type="button"
                        className={styles.viewDetailsButton}
                        onClick={() => setSelectedProduct(product)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Fallback / empty state for unpopulated categories */
              <div className={styles.emptyStateCard}>
                <h3 className={styles.emptyStateTitle}>
                  Platform Dossiers Under Classification
                </h3>
                <p className={styles.emptyStateDesc}>
                  Specifications and technical documentation for this division are available upon strategic institutional inquiry.
                </p>
                <Link href="/contact" className={styles.viewDetailsButton}>
                  Inquire With Aerospace Division
                </Link>
              </div>
            )}
          </article>
        </div>
      </div>

      {/* ========================================
          PRODUCT DETAILS MODAL
          ======================================== */}
      {selectedProduct && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={styles.modalDialog}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setSelectedProduct(null)}
              aria-label="Close dialog"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className={styles.modalImageWell}>
              <Image
                src={selectedProduct.imageSrc}
                alt={selectedProduct.imageAlt}
                fill
                sizes="(max-width: 680px) 100vw, 680px"
                className={styles.modalImage}
              />
            </div>

            <div className={styles.modalHeader}>
              {selectedProduct.role && (
                <span className={styles.modalRole}>
                  {selectedProduct.role}
                </span>
              )}
              <h3 id="modal-title" className={styles.modalTitle}>
                {selectedProduct.name}
              </h3>
            </div>

            <p className={styles.modalDesc}>{selectedProduct.description}</p>

            <div className={styles.modalActions}>
              <Link
                href="/contact"
                className={styles.modalInquireButton}
                onClick={() => setSelectedProduct(null)}
              >
                <span>Request Platform Briefing</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5H9M9 5L5.5 1.5M9 5L5.5 8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
