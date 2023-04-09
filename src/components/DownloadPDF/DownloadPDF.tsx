import { FC, useCallback } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { DownloadPDFButtonProps } from "../../types";
import html2pdf from "html2pdf.js";

import "./DownloadPDF.css";

export const DownloadPDF: FC<DownloadPDFButtonProps> = ({ contentRef }) => {
  const handleDownloadClick = useCallback(() => {
    if (!contentRef.current) return;
    html2pdf(contentRef.current, {
      margin: 0,
      filename: "CV.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 4, dpi: 192, letterRendering: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      enableLinks: true,
      pagebreak: { avoid: "section" },
    });
  }, [contentRef]);

  return (
    <button
      className="download-pdf"
      title="Download as PDF"
      onClick={handleDownloadClick}
    >
      <AiOutlineDownload />
    </button>
  );
};
