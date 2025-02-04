"use client";
import { PDFViewer } from "@react-pdf/renderer";
import { PDFDocument } from "components/PDFDocument";

export default function PDF() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <PDFDocument />
      </PDFViewer>
    </div>
  );
}
