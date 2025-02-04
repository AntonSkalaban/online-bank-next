import { FC } from "react";

import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { cards } from "constants/cards";

// Create styles
const styles = StyleSheet.create({
  page: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export const PDFDocument: FC = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {cards.map(({ name, currency }) => (
            <Text key={name + currency}>{currency}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

// ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
